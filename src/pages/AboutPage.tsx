
import React from "react";
import Layout from "@/components/layout/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-tea-dark mb-8">
            Về chúng tôi
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-medium text-tea mb-4">
                Câu chuyện của chúng tôi
              </h2>
              <p>
                Hera Tea được thành lập với tình yêu và đam mê dành cho trà thảo mộc từ thiên nhiên. 
                Chúng tôi tin rằng việc thưởng thức một tách trà không chỉ là một thói quen, mà còn là 
                một nghi thức, một khoảnh khắc để tạm dừng lại và kết nối với chính bản thân mình.
              </p>
              <p className="mt-4">
                Với niềm tin vào sức mạnh chữa lành từ thảo dược thiên nhiên, chúng tôi đã dành nhiều 
                năm nghiên cứu và phát triển các công thức độc đáo, kết hợp những thảo mộc quý giá 
                nhất để tạo ra những sản phẩm trà không chỉ thơm ngon mà còn mang lại lợi ích cho sức khỏe.
              </p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-medium text-tea mb-4">
                Sứ mệnh của chúng tôi
              </h2>
              <p>
                Sứ mệnh của Hera Tea là mang đến những sản phẩm trà thảo mộc chất lượng cao nhất,
                được chọn lọc cẩn thận từ các nguồn nguyên liệu sạch và bền vững. Chúng tôi cam kết:
              </p>
              <ul className="mt-4 space-y-2">
                <li>Sử dụng 100% thành phần tự nhiên, không chất bảo quản hay phụ gia.</li>
                <li>Hỗ trợ các nhà cung cấp địa phương và phương pháp canh tác bền vững.</li>
                <li>Không ngừng nghiên cứu và phát triển để mang đến những sản phẩm tốt nhất.</li>
                <li>Chia sẻ kiến thức về lợi ích của trà thảo mộc với cộng đồng.</li>
              </ul>
            </div>
            
            <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-serif font-medium text-tea mb-4">
                  Chất lượng là ưu tiên hàng đầu
                </h2>
                <p>
                  Mỗi sản phẩm của Hera Tea đều trải qua quá trình kiểm soát chất lượng nghiêm ngặt.
                  Chúng tôi chỉ sử dụng những nguyên liệu tốt nhất và các phương pháp sản xuất tiên tiến 
                  để đảm bảo mỗi tách trà đều mang đến trải nghiệm thưởng thức tuyệt vời.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-medium text-tea mb-4">
                  Bền vững và trách nhiệm
                </h2>
                <p>
                  Chúng tôi cam kết với các hoạt động bền vững trong mọi khía cạnh của doanh nghiệp. 
                  Từ việc lựa chọn nhà cung cấp có trách nhiệm đến việc sử dụng bao bì thân thiện 
                  với môi trường, Hera Tea luôn đặt sự phát triển bền vững lên hàng đầu.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-serif font-medium text-tea mb-4">
                Đội ngũ của chúng tôi
              </h2>
              <p>
                Phía sau mỗi sản phẩm của Hera Tea là một đội ngũ chuyên gia đầy nhiệt huyết và tâm huyết. 
                Từ các chuyên gia về thảo dược đến những người thợ thủ công lành nghề, tất cả đều làm việc 
                với một mục tiêu chung: mang đến cho bạn những sản phẩm trà thảo mộc tuyệt vời nhất.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
