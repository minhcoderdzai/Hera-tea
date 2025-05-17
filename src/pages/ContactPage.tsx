
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Map, Mail, Phone, Clock } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Tên phải có ít nhất 2 ký tự" }),
  email: z.string().email({ message: "Email không hợp lệ" }),
  phone: z.string().min(10, { message: "Số điện thoại không hợp lệ" }),
  subject: z.string().min(5, { message: "Tiêu đề phải có ít nhất 5 ký tự" }),
  message: z.string().min(10, { message: "Tin nhắn phải có ít nhất 10 ký tự" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactPage = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form data:", data);
    toast.success("Gửi tin nhắn thành công! Chúng tôi sẽ liên hệ với bạn sớm.");
    form.reset();
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-tea-dark mb-8">
            Liên hệ với chúng tôi
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg mb-6">
                Chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn.
                Đừng ngần ngại liên hệ với chúng tôi qua thông tin bên dưới hoặc
                điền vào biểu mẫu để gửi tin nhắn trực tiếp.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Map className="h-5 w-5 mr-3 text-tea flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Địa chỉ</h3>
                    <p className="text-muted-foreground">
                      123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-tea flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">info@heratea.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-tea flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Điện thoại</h3>
                    <p className="text-muted-foreground">+84 (0) 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 text-tea flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Giờ làm việc</h3>
                    <p className="text-muted-foreground">
                      Thứ 2 - Thứ 6: 9h00 - 17h00
                    </p>
                    <p className="text-muted-foreground">
                      Thứ 7: 9h00 - 12h00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <h2 className="text-xl font-medium mb-6">Gửi tin nhắn cho chúng tôi</h2>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Họ và tên</FormLabel>
                        <FormControl>
                          <Input placeholder="Nhập họ và tên" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Số điện thoại</FormLabel>
                          <FormControl>
                            <Input placeholder="0123456789" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tiêu đề</FormLabel>
                        <FormControl>
                          <Input placeholder="Tiêu đề tin nhắn" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nội dung</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Nhập nội dung tin nhắn..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-tea hover:bg-tea-dark">
                    Gửi tin nhắn
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
