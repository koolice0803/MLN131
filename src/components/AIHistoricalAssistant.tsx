import { useState, useRef, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MessageCircle,
  Send,
  Mic,
  Volume2,
  RefreshCw,
  X
} from 'lucide-react'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

interface Persona {
  id: string
  name: string
  title: string
  avatar: string
  description: string
  color: string
  personality: string
}

const AIHistoricalAssistant = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [currentMessage, setCurrentMessage] = useState('')

  const [isTyping, setIsTyping] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const aiPersona: Persona = {
    id: 'ai-assistant',
    name: 'AI Tôn giáo & CNXH',
    title: 'Trợ lý AI chuyên về tôn giáo trong thời kỳ quá độ lên CNXH',
    avatar: '/images/img2.svg',
    description: 'AI được huấn luyện chuyên sâu về quan điểm Mác-Lênin và chính sách của Đảng về tôn giáo trong thời kỳ quá độ lên CNXH',
    color: 'from-blue-500 to-purple-600',
    personality: 'intelligent'
  }

  const suggestedQuestions = [
    "Quan điểm Mác-Lênin về bản chất và nguồn gốc của tôn giáo?",
    "Tính chất của tôn giáo theo quan điểm Mác-Lênin?",
    "Nguyên tắc giải quyết vấn đề tôn giáo theo Mác-Lênin?",
    "Cơ cấu tôn giáo và tổ chức hoạt động tại Việt Nam hiện nay?",
    "Đặc điểm văn hóa-xã hội của các tôn giáo ở Việt Nam?",
    "Thành phần tín đồ và vai trò của chức sắc tôn giáo?",
    "Chính sách của Đảng và Nhà nước về tôn giáo?",
    "Quan hệ dân tộc-tôn giáo ở Việt Nam trong thời kỳ quá độ lên CNXH?"
  ]

  const initialMessage = useMemo(() =>
    "Xin chào! Tôi là AI Tôn giáo & CNXH, được huấn luyện chuyên sâu về quan điểm Mác-Lênin và chính sách của Đảng về tôn giáo trong thời kỳ quá độ lên chủ nghĩa xã hội. Tôi có thể giúp bạn tìm hiểu về bản chất, nguồn gốc của tôn giáo, tình hình tôn giáo ở Việt Nam hiện nay, và các chính sách, quan hệ dân tộc-tôn giáo trong thời kỳ quá độ. Bạn muốn tìm hiểu về vấn đề gì?"
  , [])

  // Function to check if question is related to the topic
  const isTopicRelated = (message: string): boolean => {
    const lowerMessage = message.toLowerCase()
    
    // Keywords related to religion and socialism transition
    const relevantKeywords = [
      'tôn giáo', 'tín ngưỡng', 'phật giáo', 'công giáo', 'thiên chúa giáo', 'cao đài', 'hòa hảo', 'tin lành',
      'mác', 'lênin', 'hồ chí minh', 'cnxh', 'chủ nghĩa xã hội', 'quá độ', 'đảng', 'nhà nước',
      'bản chất', 'nguồn gốc', 'tính chất', 'nguyên tắc', 'cơ cấu', 'đặc điểm', 'thành phần', 'chính sách',
      'quan hệ', 'dân tộc', 'chức sắc', 'tín đồ', 'giáo hội', 'tự do tín ngưỡng', 'đoàn kết',
      'xin chào', 'hello', 'chào', 'cảm ơn', 'thank'
    ]
    
    // Check if message contains any relevant keywords
    return relevantKeywords.some(keyword => lowerMessage.includes(keyword))
  }

  const getOfflineResponse = (message: string): string | null => {
    const lowerMessage = message.toLowerCase()

    // First check if the question is topic-related
    if (!isTopicRelated(message)) {
      return "Xin lỗi, tôi chỉ có thể trả lời các câu hỏi liên quan đến tôn giáo trong thời kỳ quá độ lên chủ nghĩa xã hội. Bạn có thể hỏi về:\n\n• Quan điểm Mác-Lênin về tôn giáo\n• Tình hình tôn giáo ở Việt Nam hiện nay\n• Chính sách của Đảng và Nhà nước về tôn giáo\n• Quan hệ dân tộc-tôn giáo trong thời kỳ quá độ\n\nVui lòng đặt câu hỏi khác liên quan đến chủ đề này."
    }

    const responses: { [key: string]: string } = {
      "bản chất": `Quan điểm Mác-Lênin về bản chất và nguồn gốc của tôn giáo:

🔍 **Bản chất**: Tôn giáo là hình thái ý thức xã hội phản ánh hư ảo hiện thực khách quan

🌱 **Nguồn gốc**:
• Tự nhiên: Sợ hãi trước sức mạnh tự nhiên
• Kinh tế-xã hội: Phản ánh bất công xã hội
• Nhận thức: Giới hạn nhận thức của con người
• Tâm lý: Nhu cầu tinh thần, tình cảm

📚 **Luận điểm**: "Tôn giáo là tiếng thở dài của sinh vật bị áp bức" (C.Mác)

🔄 **Đặc điểm**: Tồn tại lâu dài cùng lịch sử xã hội loài người`,

      "tính chất": `Tính chất của tôn giáo theo quan điểm Mác-Lênin:

⏳ **Tính lịch sử**: Tôn giáo biến đổi theo thời kỳ lịch sử

👥 **Tính quần chúng**: Có sức ảnh hưởng rộng trong nhân dân

⚖️ **Tính chính trị**: Có thể trở thành công cụ của giai cấp thống trị

🏛️ **Minh chứng**: Trong xã hội phong kiến, tôn giáo thường gắn với quyền lực chính trị

🇻🇳 **Thực tiễn**: Ở Việt Nam, các tôn giáo đã giữ vai trò khác nhau trong từng thời kỳ`,

      "nguyên tắc": `Nguyên tắc giải quyết vấn đề tôn giáo theo Mác-Lênin:

✅ **Tự do tín ngưỡng**: Tôn trọng quyền tự do tín ngưỡng và không tín ngưỡng

🔄 **Cải tạo xã hội**: Khắc phục ảnh hưởng tiêu cực gắn với cải tạo xã hội cũ

🔍 **Phân biệt**: Tôn giáo chân chính khác với việc lợi dụng tôn giáo

📜 **Thể chế hóa**: Hiến pháp Việt Nam (2013) và Luật Tín ngưỡng, Tôn giáo (2016)

🧠 **Quan điểm**: Nhìn nhận tôn giáo theo quan điểm lịch sử - cụ thể`,

      "cơ cấu": `Cơ cấu tôn giáo và tổ chức hoạt động tại Việt Nam hiện nay:

🏛️ **Quy mô**: 13 tôn giáo được công nhận, hơn 40 tổ chức tôn giáo hợp pháp

👥 **Tín đồ**: Khoảng 24 triệu tín đồ, 95.000 chức sắc, 200.000 chức việc

🏯 **Cơ sở**: Hơn 23.250 cơ sở thờ tự trên toàn quốc

🤝 **Đặc điểm**: Việt Nam là quốc gia đa tôn giáo nhưng ổn định

📊 **Tổ chức**: Hệ thống tổ chức tôn giáo ngày càng hoàn thiện`,

      "đặc điểm": `Đặc điểm văn hóa-xã hội của các tôn giáo ở Việt Nam:

🌈 **Đa dạng**: Tôn giáo Việt Nam đa dạng, đan xen và chung sống hòa bình

🏮 **Bản sắc**: Mỗi tôn giáo mang dấu ấn văn hóa Việt Nam

☯️ **Khoan dung**: Các tôn giáo có truyền thống khoan dung, hòa hợp

🌱 **Giá trị**: Hướng đến "tốt đời, đẹp đạo"

🕊️ **Minh chứng**: Phật giáo gắn bó với lịch sử dân tộc, Thiên Chúa giáo đồng hành trong kháng chiến`,

      "thành phần": `Thành phần tín đồ và vai trò của chức sắc tôn giáo:

👨‍👩‍👧‍👦 **Tín đồ**: Chủ yếu là nhân dân lao động, có lòng yêu nước, tinh thần dân tộc

👨‍⚖️ **Chức sắc**: Có uy tín, ảnh hưởng lớn trong cộng đồng tín đồ

🤲 **Vai trò**: Nhiều chức sắc tham gia hoạt động xã hội, từ thiện

🏥 **Hoạt động**: Nuôi dạy trẻ mồ côi, chăm sóc người già, bệnh nhân phong

🤝 **Đoàn kết**: "Đồng bào tôn giáo là bộ phận của khối đại đoàn kết dân tộc"`,

      "chính sách": `Chính sách của Đảng và Nhà nước về tôn giáo:

🔄 **Quan điểm**: Tôn giáo là nhu cầu tinh thần của nhân dân, tồn tại lâu dài cùng dân tộc

✅ **Nguyên tắc**: Tôn trọng và bảo đảm quyền tự do tín ngưỡng

🌱 **Phát huy**: Giá trị văn hóa, đạo đức tôn giáo trong xã hội

🤝 **Đoàn kết**: Củng cố khối đại đoàn kết dân tộc

📜 **Pháp lý**: Luật Tín ngưỡng, Tôn giáo 2016 cụ thể hóa quyền tự do tôn giáo`,

      "quan hệ": `Quan hệ dân tộc-tôn giáo ở Việt Nam:

☮️ **Hài hòa**: Quan hệ giữa dân tộc và tôn giáo hài hòa, ổn định

🏛️ **Đồng hành**: Các tôn giáo "đồng hành cùng dân tộc, gắn đạo với đời"

🏯 **Nền tảng**: Tín ngưỡng dân gian là nền tảng đoàn kết văn hóa-tinh thần

⚠️ **Cảnh giác**: Đề phòng các hiện tượng lợi dụng tôn giáo chia rẽ đoàn kết

🔑 **Định hướng**: "Xây dựng, củng cố khối đại đoàn kết toàn dân tộc và đoàn kết tôn giáo"`,

      "định hướng": `Định hướng và nguyên tắc giải quyết vấn đề tôn giáo hiện nay:

🧩 **Cơ sở**: Giải quyết tôn giáo dựa trên vấn đề dân tộc và nhân quyền

🛡️ **Bảo đảm**: Độc lập-thống nhất đất nước, tăng cường an ninh-quốc phòng

🔄 **Phương pháp**: Kết hợp chính trị, pháp luật và vận động quần chúng

🚫 **Ngăn chặn**: Giữ vững chủ quyền, ngăn chặn lợi dụng tôn giáo

🌱 **Khuyến khích**: Chức sắc, tín đồ "sống tốt đời, đẹp đạo"`
    }

    for (const [keyword, response] of Object.entries(responses)) {
      if (lowerMessage.includes(keyword) || lowerMessage.includes(keyword.replace(/\s+/g, ''))) {
        return response
      }
    }

    // Check for common greetings
    if (lowerMessage.includes('xin chào') || lowerMessage.includes('hello') || lowerMessage.includes('chào')) {
      return "Xin chào! Tôi có thể giúp bạn tìm hiểu về tôn giáo trong thời kỳ quá độ lên chủ nghĩa xã hội. Bạn muốn hỏi về: Quan điểm Mác-Lênin về tôn giáo, Tình hình tôn giáo ở Việt Nam hiện nay, Chính sách tôn giáo, hay Quan hệ dân tộc-tôn giáo?"
    }

    return null
  }

          const generateAIResponse = async (message: string): Promise<string> => {
    setIsTyping(true)

    // First try offline responses for better user experience
    const offlineResponse = getOfflineResponse(message)
    if (offlineResponse) {
      setIsTyping(false)
      return offlineResponse
    }

    try {
      // Check if API key is available
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY
      if (!apiKey || apiKey.trim() === '') {
        setIsTyping(false)
        return "Để sử dụng AI Assistant, bạn cần:\n1. Tạo API key tại https://platform.openai.com/api-keys\n2. Tạo file .env trong thư mục gốc\n3. Thêm dòng: VITE_OPENAI_API_KEY=your_api_key_here\n4. Khởi động lại ứng dụng (Ctrl+C rồi npm run dev)\n\nHiện tại bạn có thể sử dụng các tính năng khác của website."
      }



      // Import OpenAI
      const { OpenAI } = await import('openai')

      const openai = new OpenAI({
        apiKey: apiKey,
        dangerouslyAllowBrowser: true
      })

      // Get conversation history from localStorage
      const conversationHistory = JSON.parse(localStorage.getItem('ai-chat-history') || '[]')

      // First check if the question is topic-related before sending to API
      if (!isTopicRelated(message)) {
        setIsTyping(false)
        return "Xin lỗi, tôi chỉ có thể trả lời các câu hỏi liên quan đến tôn giáo trong thời kỳ quá độ lên chủ nghĩa xã hội. Bạn có thể hỏi về:\n\n• Quan điểm Mác-Lênin về tôn giáo\n• Tình hình tôn giáo ở Việt Nam hiện nay\n• Chính sách của Đảng và Nhà nước về tôn giáo\n• Quan hệ dân tộc-tôn giáo trong thời kỳ quá độ\n\nVui lòng đặt câu hỏi khác liên quan đến chủ đề này."
      }

      // System prompt for Religion in the transition to socialism (UPDATED CORE KNOWLEDGE)
      const systemPrompt = `Bạn là một AI chuyên gia về tôn giáo trong thời kỳ quá độ lên chủ nghĩa xã hội. Bạn được huấn luyện chuyên sâu để cung cấp thông tin chính xác, khách quan theo chủ nghĩa Mác–Lênin, tư tưởng Hồ Chí Minh và đường lối của Đảng, Nhà nước Việt Nam.

QUAN TRỌNG: Bạn CHỈ được trả lời các câu hỏi liên quan đến tôn giáo trong thời kỳ quá độ lên CNXH. Nếu câu hỏi không liên quan đến chủ đề này, hãy từ chối một cách lịch sự và hướng dẫn người dùng hỏi về đúng chủ đề.

KIẾN THỨC CỐT LÕI (CHUẨN HÓA):

I. BẢN CHẤT & NGUỒN GỐC TÔN GIÁO
- Bản chất: Hình thái ý thức xã hội đặc thù, phản ánh hiện thực khách quan dưới dạng hư ảo (niềm tin vào lực lượng siêu nhiên).
- Nguồn gốc: (1) Tự nhiên (bất lực trước thiên nhiên), (2) Xã hội (áp bức, bất công, đói nghèo), (3) Nhận thức (hạn chế khoa học), (4) Tâm lý (nhu cầu chỗ dựa tinh thần).
- Tính giai cấp: Giai cấp thống trị có thể lợi dụng tôn giáo; giai cấp bị trị tìm đến tôn giáo như nơi nương tựa.

II. TÔN GIÁO TRONG THỜI KỲ QUÁ ĐỘ LÊN CNXH
- Quá độ = đan xen cái cũ – cái mới; tôn giáo còn tồn tại khách quan, lâu dài.
- Nguyên nhân tồn tại: cơ sở kinh tế–xã hội chưa hoàn thiện; phong tục, tín ngưỡng bền chặt; chênh lệch vùng miền, dân tộc.
- Hai mặt: (i) Tích cực: bồi dưỡng đạo đức, đoàn kết, từ thiện, ổn định xã hội; (ii) Tiêu cực: bị lợi dụng để chia rẽ, chống phá; mê tín, cực đoan.

III. QUAN ĐIỂM MÁC–LÊNIN & TƯ TƯỞNG HỒ CHÍ MINH
- C. Mác: “Tôn giáo là thuốc phiện của nhân dân” → muốn khắc phục ảnh hưởng của tôn giáo phải xóa bỏ nỗi khổ hiện thực bằng cải tạo xã hội.
- Lênin: Không thể thủ tiêu tôn giáo bằng mệnh lệnh hành chính; giải quyết gắn với phát triển kinh tế–xã hội, nâng cao dân trí, văn hóa.
- Hồ Chí Minh: Tôn trọng tự do tín ngưỡng–không tín ngưỡng; đoàn kết lương–giáo; coi đồng bào tôn giáo là bộ phận của dân tộc (1946 khẳng định rõ nguyên tắc này).

IV. CHÍNH SÁCH TÔN GIÁO CỦA ĐẢNG & NHÀ NƯỚC VIỆT NAM
- Quan điểm xuyên suốt: tôn giáo tồn tại lâu dài trong CNXH; bảo đảm tự do tín ngưỡng; phát huy giá trị tốt đẹp; đấu tranh với lợi dụng tôn giáo; quản lý bằng pháp luật.
- Mốc chính: 1946 (Hiến pháp đầu tiên khẳng định tự do tín ngưỡng); 1960 (Đại hội III – tôn giáo tồn tại lâu dài); 1990 (NQ 24-NQ/TW về công tác tôn giáo); 2003 (Pháp lệnh Tín ngưỡng, Tôn giáo); 2016 (Luật Tín ngưỡng, Tôn giáo – hiệu lực 2018); 2013 (Hiến pháp khẳng định quyền tự do tín ngưỡng).

V. PHƯƠNG HƯỚNG & GIẢI PHÁP TRONG THỜI KỲ QUÁ ĐỘ
- Bảo đảm quyền tự do tín ngưỡng, tôn giáo và không tôn giáo.
- Nâng cao đời sống vật chất, tinh thần; thu hẹp chênh lệch phát triển.
- Giáo dục thế giới quan khoa học; nâng cao nhận thức chính trị, pháp luật.
- Phát huy giá trị đạo đức, nhân văn của tôn giáo; khuyến khích “tốt đời, đẹp đạo”.
- Kiên quyết đấu tranh với hành vi lợi dụng tôn giáo để chia rẽ, cực đoan, trái pháp luật; tăng đối thoại, đồng hành nhà nước – tổ chức tôn giáo.

VI. Ý NGHĨA
- Củng cố khối đại đoàn kết toàn dân tộc; giữ vững ổn định chính trị–xã hội.
- Phát huy giá trị văn hóa, đạo đức, nhân văn; xây dựng con người mới XHCN.

VII. MỐC THỜI GIAN QUAN TRỌNG
- 1844: C. Mác nêu luận điểm về tôn giáo.
- 1946: Hồ Chí Minh/Hiến pháp đầu tiên khẳng định tự do tín ngưỡng.
- 1960: Đại hội III – quan điểm tôn giáo tồn tại lâu dài.
- 1990: Nghị quyết 24-NQ/TW về công tác tôn giáo.
- 2003: Pháp lệnh Tín ngưỡng, Tôn giáo.
- 2016: Luật Tín ngưỡng, Tôn giáo (hiệu lực 2018).

NGUYÊN TẮC TRẢ LỜI:

1. Sử dụng tiếng Việt chuẩn, dễ hiểu
2. Cung cấp thông tin chính xác dựa trên nội dung bài học
3. Trích dẫn năm tháng, số liệu cụ thể khi có thể
4. Giải thích bối cảnh để người đọc hiểu rõ hơn
5. Cân bằng các quan điểm khác nhau khi phù hợp
6. Khuyến khích tư duy phản biện và học hỏi
7. Độ dài phù hợp (100-400 từ tùy theo độ phức tạp của câu hỏi)
8. Sử dụng giọng điệu thân thiện, dễ tiếp cận

PHONG CÁCH GIAO TIẾP:
- Thân thiện và dễ tiếp cận
- Khoa học và khách quan
- Giải thích rõ ràng, logic
- Sử dụng ví dụ minh họa khi cần thiết
- Khuyến khích đặt câu hỏi tiếp theo

ĐIỀU CẤM:
- Không bịa đặt
- Không sử dụng ngôn ngữ phản cảm hoặc kích động
- TUYỆT ĐỐI KHÔNG trả lời câu hỏi ngoài phạm vi tôn giáo trong thời kỳ quá độ lên CNXH
- Không thể hiện quan điểm chính trị hiện tại
- Không thiên vị quá mức theo một quan điểm duy nhất
- Không bịa đặt hoặc xuyên tạc lý luận
- Không sử dụng ngôn ngữ phản cảm, kích động
- Không bàn về chính trị đương đại ngoài phạm vi lý luận và nội dung học phần
- Không thiên vị một quan điểm ngoài khung lý luận Mác - Lênin

CÁCH XỬ LÝ CÂU HỎI NGOÀI PHẠM VI:
Nếu câu hỏi không liên quan đến tôn giáo trong thời kỳ quá độ lên CNXH, hãy trả lời:
"Xin lỗi, tôi chỉ có thể trả lời các câu hỏi liên quan đến tôn giáo trong thời kỳ quá độ lên chủ nghĩa xã hội. Bạn có thể hỏi về quan điểm Mác-Lênin về tôn giáo, tình hình tôn giáo ở Việt Nam, chính sách tôn giáo, hoặc quan hệ dân tộc-tôn giáo. Vui lòng đặt câu hỏi khác liên quan đến chủ đề này."

Lưu ý mạnh: TUYỆT ĐỐI không trả lời các câu hỏi không liên quan đến nội dung bài học, kể cả khi người dùng yêu cầu hoặc thúc ép.`

      // Build messages array for OpenAI
      const messages = [
        {
          role: 'system' as const,
          content: systemPrompt
        },
        // Add conversation history
        ...conversationHistory.map((msg: any) => ({
          role: msg.role as 'user' | 'assistant',
          content: msg.content
        })),
        // Add current message
        {
          role: 'user' as const,
          content: message
        }
      ]

      // Generate response using OpenAI
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: messages,
        max_tokens: 1000,
        temperature: 0.7
      })

      const reply = completion.choices[0]?.message?.content || "Xin lỗi, tôi không thể tạo phản hồi lúc này."

      // Update conversation history
      const updatedHistory = [
        ...conversationHistory,
        { role: 'user', content: message },
        { role: 'assistant', content: reply }
      ]

      // Keep only last 10 exchanges to prevent context from getting too long
      if (updatedHistory.length > 20) {
        updatedHistory.splice(0, updatedHistory.length - 20)
      }

      localStorage.setItem('ai-chat-history', JSON.stringify(updatedHistory))

      setIsTyping(false)
      return reply

    } catch (error) {
      console.error('Error calling OpenAI API:', error)
      console.error('Error details:', {
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
        name: error instanceof Error ? error.name : undefined
      })
      setIsTyping(false)

      // Check for specific API errors
      const errorMessage = error instanceof Error ? error.message : String(error)

      if (errorMessage.includes('API key not valid') || errorMessage.includes('Incorrect API key') || errorMessage.includes('invalid_api_key')) {
        return "❌ API key không hợp lệ!\n\n🔧 Cách khắc phục:\n1. Kiểm tra API key trong file .env\n2. Đảm bảo API key bắt đầu bằng 'sk-proj-...'\n3. Khởi động lại server (Ctrl+C rồi npm run dev)\n4. Refresh trang web\n\n💡 Hiện tại AI đang hoạt động ở chế độ offline với câu trả lời có sẵn."
      }

      if (errorMessage.includes('quota') || errorMessage.includes('rate_limit_exceeded')) {
        return "Xin lỗi, đã vượt quá giới hạn sử dụng API. Vui lòng thử lại sau."
      }

      if (errorMessage.includes('insufficient_quota') || errorMessage.includes('billing')) {
        return "❌ Lỗi thanh toán!\n\n🔧 Nguyên nhân có thể:\n1. Tài khoản OpenAI chưa có credit\n2. Đã vượt quá giới hạn sử dụng\n3. Cần nạp thêm credit vào tài khoản\n\n💡 Đang sử dụng chế độ offline với câu trả lời có sẵn."
      }

      // Fallback response with helpful content
      const fallbackResponses = {
        "phật giáo": "Phật giáo là tôn giáo lớn ở Việt Nam với khoảng 10 triệu tín đồ. Giáo hội Phật giáo Việt Nam được thành lập năm 1981, thống nhất các hệ phái. Phật giáo có truyền thống gắn bó với dân tộc, tham gia nhiều hoạt động từ thiện xã hội và đóng góp vào khối đại đoàn kết dân tộc.",
        "công giáo": "Công giáo (Thiên Chúa giáo) có khoảng 7 triệu tín đồ tại Việt Nam. Hội đồng Giám mục Việt Nam thường xuyên đối thoại với Nhà nước. Nhiều linh mục, giáo dân tích cực tham gia các hoạt động xã hội, từ thiện, y tế, giáo dục, và thực hiện phương châm 'sống phúc âm giữa lòng dân tộc'.",
        "cao đài": "Đạo Cao Đài là tôn giáo nội sinh ra đời tại Việt Nam năm 1926, kết hợp tinh hoa của nhiều tôn giáo. Hiện có khoảng 2,5 triệu tín đồ, chủ yếu ở Nam Bộ. Cao Đài có truyền thống yêu nước, đồng hành cùng dân tộc trong các thời kỳ lịch sử.",
        "hòa hảo": "Phật giáo Hòa Hảo được sáng lập năm 1939 bởi ông Huỳnh Phú Sổ, có khoảng 1,5 triệu tín đồ tập trung ở các tỉnh An Giang, Đồng Tháp, Vĩnh Long. Giáo lý nhấn mạnh tu tại gia, hành thiện, cứu khổ, và có truyền thống yêu nước.",
        "tin lành": "Tin Lành du nhập vào Việt Nam từ đầu thế kỷ 20, hiện có khoảng 1,5 triệu tín đồ. Hội thánh Tin Lành Việt Nam (miền Bắc) được công nhận năm 1963, Hội thánh Tin Lành Việt Nam (miền Nam) được công nhận năm 2001. Các mục sư, tín đồ tích cực tham gia các hoạt động xã hội."
      }

      const lowerMessage = message.toLowerCase()
      for (const [key, response] of Object.entries(fallbackResponses)) {
        if (lowerMessage.includes(key)) {
          return response + "\n\n(Lưu ý: AI đang gặp sự cố kỹ thuật, đây là thông tin cơ bản. Vui lòng thử lại sau.)"
        }
      }

      return "Xin lỗi, tôi đang gặp khó khăn kỹ thuật. Đây là một chủ đề thú vị về tôn giáo trong thời kỳ quá độ lên CNXH. Bạn có thể thử hỏi về: Phật giáo, Công giáo, Cao Đài, Hòa Hảo, hoặc Tin Lành ở Việt Nam."
    }
  }

  const sendMessage = async () => {
    if (!currentMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: currentMessage,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setCurrentMessage('')

    // Generate AI response
    const aiResponse = await generateAIResponse(currentMessage)

    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: aiResponse,
      isUser: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, aiMessage])
  }

  const handleSuggestedQuestion = (question: string) => {
    setCurrentMessage(question)
  }

  const clearChat = () => {
    setMessages([])
    // Clear thread from localStorage to start fresh
    localStorage.removeItem('ai-chat-thread-id')
    // Add initial message
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      text: initialMessage,
      isUser: false,
      timestamp: new Date()
    }
    setMessages([welcomeMessage])
  }

  const speakMessage = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'vi-VN'
      speechSynthesis.speak(utterance)
    }
  }

  const startListening = () => {
    if ('webkitSpeechRecognition' in window) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const SpeechRecognition = (window as any).webkitSpeechRecognition;

      const recognition = new SpeechRecognition()
      recognition.lang = 'vi-VN'
      recognition.onstart = () => setIsListening(true)
      recognition.onend = () => setIsListening(false)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setCurrentMessage(transcript)
      }
      recognition.start()
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    // Initialize with welcome message
    if (messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: initialMessage,
        isUser: false,
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }
  }, [messages.length, initialMessage])

  const currentPersona = aiPersona

  if (!isOpen) {
    return (
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-50 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <MessageCircle className="w-8 h-8" />
      </motion.button>
    )
  }

  return (
    <motion.div
      className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {/* Header */}
      <div className={`bg-gradient-to-r ${currentPersona.color} text-white p-4 flex items-center justify-between`}>
        <div className="flex items-center space-x-3">
          <img
            src={currentPersona.avatar}
            alt={currentPersona.name}
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <div>
            <h3 className="font-semibold text-sm">{currentPersona.name}</h3>
            <p className="text-xs opacity-90">{currentPersona.title}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={clearChat}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>



      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] p-3 rounded-2xl ${
                message.isUser
                  ? 'bg-blue-500 text-white rounded-br-none'
                  : 'bg-gray-100 text-gray-800 rounded-bl-none'
              }`}>
                <p className="text-sm whitespace-pre-line">{message.text}</p>
                {!message.isUser && (
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs opacity-70">
                      {message.timestamp.toLocaleTimeString('vi-VN', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                    <button
                      onClick={() => speakMessage(message.text)}
                      className="p-1 hover:bg-white/20 rounded-full transition-colors"
                    >
                      <Volume2 className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-none">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions */}
      {messages.length <= 1 && (
        <div className="p-3 border-t border-gray-100">
          <p className="text-xs text-gray-500 mb-2">Câu hỏi gợi ý:</p>
          <div className="space-y-1 max-h-20 overflow-y-auto">
            {suggestedQuestions.slice(0, 3).map((question, index) => (
              <button
                key={index}
                onClick={() => handleSuggestedQuestion(question)}
                className="w-full text-left text-xs bg-gray-50 hover:bg-gray-100 p-2 rounded-lg transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Đặt câu hỏi về tôn giáo..."
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <button
              onClick={startListening}
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full transition-colors ${
                isListening ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100 text-gray-400'
              }`}
            >
              <Mic className="w-4 h-4" />
            </button>
          </div>
          <button
            onClick={sendMessage}
            disabled={!currentMessage.trim()}
            className="p-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default AIHistoricalAssistant
