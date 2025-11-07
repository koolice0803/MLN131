import { motion } from "framer-motion";
import {
  BadgeQuestionMark,
  Bot,
  Check,
  LayoutDashboard,
  MessageCircle,
  Search,
} from "lucide-react";

const AIUsagePage = () => {
  const historicalSignificance = [
    {
      icon: Search,
      title: "Hỗ trợ tìm kiếm gợi ý các nội dung liên quan tới chủ đề",
      points: [
        "Dựa vào các nội dung được gợi ý, các thành viên nhóm kiểm chứng thông tin và biên soạn lại thành nội dung hoàn chỉnh.",
      ],
    },
    {
      icon: LayoutDashboard,
      title: "Gợi ý xắp sếp bố cục của trang web",
      points: [
        "Quá trình xây dựng trang web và dựng các bố cục nhanh chóng hơn dựa vào các gợi ý được cung cấp.",
      ],
    },
    {
      icon: BadgeQuestionMark,
      title: "Tạo quiz dựa trên nội dung nhóm đã biên soạn",
      points: [
        "Thành viên vẫn kiểm chứng tính đúng sai đáp án của các quiz trước khi sử dụng.",
      ],
    },
    {
      icon: MessageCircle,
      title: "Chatbot AI",
      points: [
        "Các nội dung của chatbot AI trả lời nằm trong phạm vi các phần nội dung đã được các thành viên nhóm kiểm chứng nhằm đảm bảo tính chính xác.",
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
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
            <Bot className="w-4 h-4 mr-2" />
            Về sử dụng AI
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-gradient">
              Thông tin về việc sử dụng AI trên site
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-8">
            Website có sử dụng AI <strong>(Chat GPT)</strong> cho công cụ
            chatbot và cũng được sử dụng với vai trò hỗ trợ cho quá trình biên
            soạn, tìm kiếm và gợi ý trình bày thông tin nhằm nâng cao hiệu quả,
            rút ngắn thời gian.
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-8">
            Các thông tin cuối cùng đã được thành viên của nhóm kiểm chứng độ
            chính xác thông qua các giáo trình và thông tin chính thức.
          </p>
        </motion.div>

        {/* Historical Significance */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
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
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-lime-600 rounded-md flex items-center justify-center">
                      <Icon className="w-4 h-4 text-white" />
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
                        <Check className="w-12 h-12 text-lime-800" />
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
      </div>
    </div>
  );
};

export default AIUsagePage;
