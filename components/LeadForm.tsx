"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";

// ✅ Schema with phone & message
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .max(15, { message: "Phone number must be less than 15 digits." })
    .regex(/^[0-9]+$/, { message: "Phone number must contain only digits." }),
  message: z.string().min(5, { message: "Message must be at least 5 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function LeadForm() {
  const [loading,setLoading] = React.useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
   try {
    setLoading(true);
     const res = await axios.post("http://localhost:3000/api/contacts", values);

      console.log("✅ Server response:", res);
      alert("Message sent successfully!");
    } catch (error) {
     console.error("❌ Submission error:", error);
   
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Contact Us
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Have a project in mind or just want to say hello? Fill out the form
            and our team will get back to you within 24 hours. Let’s create
            something amazing together!
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>📍 Hyderabad,India</li>
            <li>📞 +91 91826 61204</li>
            <li>✉️ business.skillhigh@gmail.com</li>
          </ul>
        </div>

        {/* Right Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="9876543210" type="tel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your message..." rows={4} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            <Button disabled={loading} type="submit" className="w-full bg-green-800 text-white text-base sm:text-md px-4 py-5 hover:bg-primary pixel-border shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] transition-all duration-300 transform hover:-translate-y-1 focus:outline-none flex items-center gap-2 cursor-pointer">
          {loading ? "Sending..." : "Send Message"}
        </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}


 