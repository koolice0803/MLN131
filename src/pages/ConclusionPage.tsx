import { motion } from "framer-motion";
import {
  BookCheck,
  CheckCircle,
  Gavel,
  HeartHandshake,
  MegaphoneIcon,
  Quote,
  ShieldCheck,
  SmilePlus,
  StarIcon,
} from "lucide-react";

const ConclusionPage = () => {
  const characteristics = [
    {
      icon: StarIcon,
      title: "Góp phần củng cố khối đại đoàn kết dân tộc",
      points: [
        "Các tổ chức tôn giáo tham gia phong trào thi đua yêu nước, từ thiện xã hội, chăm sóc người yếu thế, bảo vệ môi trường – góp phần nuôi dưỡng tinh thần “đạo – đời hòa hợp”",
      ],
      img: "https://baokhanhhoa.vn/file/e7837c02857c8ca30185a8c39b582c03/dataimages/201509/original/images1097335_NT491.JPG",
      imgLabel:
        "Phát huy vai trò của các tôn giáo trong phong trào thi đua yêu nước",
    },
    {
      icon: HeartHandshake,
      title: "Tham gia công tác xã hội",
      points: [
        "Trong đại dịch COVID-19, nhiều chùa, nhà thờ, thánh thất trở thành điểm cứu trợ, phát thuốc, giúp người khó khăn – thể hiện tinh thần nhân ái và trách nhiệm xã hội.",
      ],
      img: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/11/4/970525/CHUA-GIAC-NGO-13.jpg",
      imgLabel:
        "Tấm lòng của phật tử và chùa Giác Ngộ trong những ngày đỉnh dịch ở TPHCM",
    },
    {
      icon: Gavel,
      title: "Góp phần ổn định xã hội và phát triển văn hóa",
      points: [
        "Tôn giáo giúp củng cố đạo đức, khuyến khích lối sống nhân văn, tôn trọng lẽ phải – những giá trị nền tảng của xã hội chủ nghĩa.",
      ],
      img: "https://photo-cms-giacngo.zadn.vn/Uploaded/phuongdu/2022_11_27/btn-0303-6645-5894.jpg",
      imgLabel: "Phiên trù bị Đại hội Đại biểu Phật giáo toàn quốc lần thứ IX",
    },
    {
      icon: MegaphoneIcon,
      title: "Phối hợp với chính quyền xây dựng đời sống văn minh",
      points: [
        "Đối thoại, giáo dục pháp luật và nâng cao nhận thức về tín ngưỡng được thực hiện thường xuyên, giúp người dân hiểu rõ quyền và nghĩa vụ công dân, từ đó phòng ngừa lợi dụng tôn giáo.",
      ],
      img: "https://file3.qdnd.vn/data/images/0/2022/12/30/thuthuytv/1%201.jpg?dpi=150&quality=100&w=870",
      imgLabel: "Đa dạng hình thức tuyên truyền cho chức sắc, tín đồ tôn giáo",
    },
  ];

  const historicalSignificance = [
    {
      icon: BookCheck,
      title: "Nhận thức đúng bản chất của tôn giáo",
      points: [
        "Cần hiểu rằng tôn giáo vừa mang giá trị tinh thần, vừa có thể bị lợi dụng cho mục đích chính trị — do đó phải có cách nhìn biện chứng, khách quan, và lịch sử – cụ thể.",
      ],
    },
    {
      icon: SmilePlus,
      title: "Phát huy giá trị tích cực, hạn chế tiêu cực",
      points: [
        "Những giá trị đạo đức, nhân văn của tôn giáo cần được khuyến khích; đồng thời kiên quyết đấu tranh với các biểu hiện cực đoan, mê tín, hoặc lợi dụng tôn giáo để chia rẽ dân tộc.",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Giữ vững nguyên tắc tự do tín ngưỡng",
      points: [
        "Mọi công dân đều có quyền theo hoặc không theo tôn giáo, song phải sống và hành động theo pháp luật, tôn trọng lợi ích chung của cộng đồng và Tổ quốc.",
      ],
    },
    {
      icon: StarIcon,
      title: "Củng cố khối đại đoàn kết dân tộc – tôn giáo",
      points: [
        "Đoàn kết là sức mạnh cốt lõi của dân tộc Việt Nam. Mỗi tôn giáo, mỗi người có đạo đều là một phần của khối đại đoàn kết toàn dân trong công cuộc xây dựng chủ nghĩa xã hội.",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-green-50 via-white to-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4 mr-2" />
            Kết luận
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-gradient">KẾT LUẬN & LIÊN HỆ THỰC TIỄN</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sau khi tìm hiểu về quan điểm Mác – Lênin, thực trạng tôn giáo ở
            Việt Nam và chính sách tôn giáo trong thời kỳ quá độ lên chủ nghĩa
            xã hội, chúng ta sẽ đi đến một số kết luận quan trọng.
          </p>
        </motion.div>

        {/* Three Main Basis */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Kết luận chung
          </h2>

          <div className="grid grid-cols-1 gap-8">
            {/* Theoretical Basis */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-orange-500">
              <ul className="space-y-4">
                <motion.li
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-lime-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">
                    Tôn giáo là một hiện tượng xã hội và văn hóa đặc biệt, phản
                    ánh những khát vọng tinh thần của con người trong mọi thời
                    kỳ lịch sử.
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <CheckCircle className="w-5 h-5 text-lime-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">
                    Dưới góc nhìn của chủ nghĩa Mác – Lênin, tôn giáo không chỉ
                    là “tiếng thở dài của sinh vật bị áp bức”, mà còn là sản
                    phẩm của những điều kiện tự nhiên, kinh tế và nhận thức của
                    xã hội.
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <CheckCircle className="w-5 h-5 text-lime-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">
                    Trong thời kỳ quá độ lên chủ nghĩa xã hội, tôn giáo vẫn tồn
                    tại như một nhu cầu tinh thần chính đáng của nhân dân.
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <CheckCircle className="w-5 h-5 text-lime-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">
                    Đảng và Nhà nước ta luôn khẳng định tôn trọng tự do tín
                    ngưỡng, đồng thời phát huy các giá trị đạo đức và văn hóa
                    tích cực của tôn giáo, góp phần củng cố khối đại đoàn kết
                    toàn dân tộc.
                  </span>
                </motion.li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Characteristics */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Liên hệ thực tiễn ngày nay
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Trong bối cảnh hội nhập quốc tế và phát triển xã hội số, tôn giáo ở
            Việt Nam đang thể hiện vai trò tích cực và đồng hành cùng dân tộc:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {characteristics.map((char, index) => {
              const Icon = char.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow p-6 hover-lift"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-red-500 to-yellow-500 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className=" font-bold text-gray-900">{char.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {char.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="flex items-start space-x-3"
                      >
                        <span className="text-gray-700 text-sm leading-relaxed text-justify">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="rounded overflow-hidden mt-4">
                    <img src={char.img} alt={char.imgLabel} />
                  </div>
                  <p className="text-xs text-black/50 italic mt-2">
                    {char.imgLabel}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Historical Significance */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Bài học rút ra
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Từ việc nghiên cứu và quan sát thực tiễn tôn giáo trong thời kỳ quá
            độ lên chủ nghĩa xã hội ở Việt Nam, có thể rút ra một số bài học
            quan trọng:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {historicalSignificance.map((significance, index) => {
              const Icon = significance.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-orange-50 to-lime-50 rounded-2xl p-8 border border-orange-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-lime-600 rounded-md flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {significance.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {significance.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="flex items-start space-x-3"
                      >
                        <span className="text-gray-700 text-sm leading-relaxed text-justify">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-lime-700 via-orange-700 to-lime-700 rounded-2xl shadow-xl p-8 text-white">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Quote className="w-6 h-6" />
              <h2 className="text-2xl md:text-3xl font-bold">
                Thông điệp kết luận
              </h2>
              <Quote className="w-6 h-6" />
            </div>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto italic">
              “Tôn giáo, nếu được định hướng đúng đắn, sẽ không còn là tàn dư
              của quá khứ, mà là nhịp cầu nối con người đến những giá trị nhân
              văn cao đẹp trong xã hội mới – xã hội chủ nghĩa.”
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConclusionPage;
