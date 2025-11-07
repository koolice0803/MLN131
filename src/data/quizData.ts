export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: 'ton-giao-vn' | 'mac-lenin' | 'chinh-sach-cnxh';
  difficulty: 'easy' | 'medium' | 'hard';
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Theo C. Mác, tôn giáo là gì?",
    options: [
      "Hình thái ý thức xã hội phản ánh thế giới thực một cách hư ảo",
      "Một hiện tượng tự nhiên thuần túy",
      "Một công cụ của chính quyền phong kiến",
      "Một hệ thống triết học duy vật"
    ],
    correctAnswer: 0,
    explanation: "Mác coi tôn giáo là hình thái ý thức xã hội phản ánh hiện thực khách quan dưới dạng hư ảo.",
    category: "mac-lenin",
    difficulty: "easy"
  },
  {
    id: 2,
    question: "Nguồn gốc chủ yếu dẫn đến sự ra đời của tôn giáo là:",
    options: [
      "Tự nhiên, xã hội, nhận thức và tâm lý",
      "Kinh tế và chính trị",
      "Văn hóa và phong tục",
      "Truyền thống dân tộc"
    ],
    correctAnswer: 0,
    explanation: "Theo quan điểm Mác – Lênin, bốn nguyên nhân cơ bản hình thành tôn giáo là tự nhiên, xã hội, nhận thức, tâm lý.",
    category: "mac-lenin",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Ph. Ăng-ghen cho rằng tôn giáo có đặc điểm gì?",
    options: [
      "Chỉ có tính tiêu cực",
      "Vừa là sản phẩm tinh thần của nhân dân, vừa có thể bị lợi dụng",
      "Là nguồn gốc của khoa học",
      "Chỉ tồn tại trong giai cấp tư sản"
    ],
    correctAnswer: 1,
    explanation: "Ăng-ghen nêu tôn giáo có hai mặt: phản ánh đời sống tinh thần và có thể bị lợi dụng cho mục tiêu thống trị.",
    category: "mac-lenin",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Lênin khẳng định tôn giáo chỉ mất đi khi nào?",
    options: [
      "Khi xã hội không còn áp bức, bất công",
      "Khi khoa học phát triển",
      "Khi con người không còn tín ngưỡng",
      "Khi chính quyền cấm đoán tôn giáo"
    ],
    correctAnswer: 0,
    explanation: "Tôn giáo chỉ mất đi khi điều kiện xã hội sinh ra nó không còn tồn tại.",
    category: "mac-lenin",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "Nguyên tắc giải quyết vấn đề tôn giáo theo chủ nghĩa Mác – Lênin là:",
    options: [
      "Tôn trọng tự do tín ngưỡng và không tín ngưỡng",
      "Bài trừ mọi tôn giáo",
      "Chỉ công nhận tôn giáo truyền thống",
      "Tách đạo khỏi xã hội"
    ],
    correctAnswer: 0,
    explanation: "Quan điểm cơ bản: tôn trọng quyền tự do tín ngưỡng và không tín ngưỡng.",
    category: "mac-lenin",
    difficulty: "easy"
  },
  {
    id: 6,
    question: "Vì sao Mác nói 'tôn giáo là thuốc phiện của nhân dân'?",
    options: [
      "Vì tôn giáo vừa an ủi nỗi khổ, vừa khiến con người quên mất nguyên nhân thật của nó",
      "Vì tôn giáo gây hại cho sức khỏe",
      "Vì tôn giáo là công cụ tuyên truyền",
      "Vì tôn giáo là mê tín dị đoan"
    ],
    correctAnswer: 0,
    explanation: "Mác dùng ẩn dụ 'thuốc phiện' để nói tôn giáo vừa xoa dịu nỗi đau, vừa che mờ hiện thực xã hội bất công.",
    category: "mac-lenin",
    difficulty: "hard"
  },

  // ------------------- PHẦN 2 -------------------
  // 2. Tôn giáo ở Việt Nam hiện nay
  {
    id: 7,
    question: "Hiện nay Việt Nam có bao nhiêu tôn giáo được Nhà nước công nhận?",
    options: ["10", "13", "20", "43"],
    correctAnswer: 1,
    explanation: "Theo Ban Tôn giáo Chính phủ, Việt Nam có 13 tôn giáo được công nhận và hơn 40 tổ chức tôn giáo hợp pháp.",
    category: "ton-giao-vn",
    difficulty: "easy"
  },
  {
    id: 8,
    question: "Đặc điểm nổi bật của đời sống tôn giáo Việt Nam là:",
    options: [
      "Đa dạng, hòa hợp, ổn định",
      "Mâu thuẫn giữa các tôn giáo",
      "Chỉ có Phật giáo phát triển",
      "Chịu ảnh hưởng hoàn toàn từ phương Tây"
    ],
    correctAnswer: 0,
    explanation: "Tôn giáo Việt Nam đa dạng, đan xen và chung sống hòa bình, phản ánh tính khoan dung văn hóa.",
    category: "ton-giao-vn",
    difficulty: "easy"
  },
  {
    id: 9,
    question: "Vai trò của các chức sắc tôn giáo ở Việt Nam hiện nay là gì?",
    options: [
      "Cầu nối giữa tôn giáo và xã hội, tham gia công tác xã hội",
      "Chỉ lo việc nghi lễ tôn giáo",
      "Không tham gia chính trị – xã hội",
      "Tách biệt với chính quyền"
    ],
    correctAnswer: 0,
    explanation: "Các chức sắc có uy tín, là cầu nối quan trọng giữa tôn giáo và đời sống xã hội, tham gia hoạt động từ thiện, dân vận.",
    category: "ton-giao-vn",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "Niềm tin tôn giáo ở Việt Nam thường hướng đến giá trị nào?",
    options: [
      "Tốt đời, đẹp đạo – nhân ái – hòa hợp",
      "Tách biệt đạo và đời",
      "Phủ định văn hóa truyền thống",
      "Phát triển chủ nghĩa cá nhân"
    ],
    correctAnswer: 0,
    explanation: "Đa số tôn giáo Việt Nam hướng tới giá trị 'tốt đời, đẹp đạo' và tinh thần nhân văn.",
    category: "ton-giao-vn",
    difficulty: "easy"
  },
  {
    id: 11,
    question: "Tôn giáo Việt Nam có đặc điểm văn hóa nào sau đây?",
    options: [
      "Mang đậm bản sắc dân tộc, có sự Việt hóa rõ nét",
      "Tách biệt hoàn toàn khỏi văn hóa dân tộc",
      "Chịu ảnh hưởng phương Tây thuần túy",
      "Không có giá trị văn hóa"
    ],
    correctAnswer: 0,
    explanation: "Các tôn giáo như Cao Đài, Hòa Hảo thể hiện rõ sự Việt hóa trong nghi lễ và triết lý sống.",
    category: "ton-giao-vn",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "Nhân tố giúp Việt Nam không xảy ra xung đột tôn giáo là:",
    options: [
      "Chính sách đoàn kết và tôn trọng tự do tín ngưỡng",
      "Chính quyền can thiệp sâu vào hoạt động tôn giáo",
      "Chỉ cho phép một tôn giáo hoạt động",
      "Không có tôn giáo nào lớn mạnh"
    ],
    correctAnswer: 0,
    explanation: "Đường lối tôn trọng tự do tín ngưỡng và chính sách đoàn kết dân tộc giúp tôn giáo chung sống hòa bình.",
    category: "ton-giao-vn",
    difficulty: "hard"
  },

  // ------------------- PHẦN 3 -------------------
  // 3. Chính sách & quan hệ dân tộc – tôn giáo trong thời kỳ quá độ lên CNXH
  {
    id: 13,
    question: "Chính sách tôn giáo của Việt Nam hiện nay dựa trên nguyên tắc nào?",
    options: [
      "Tôn trọng, bảo đảm quyền tự do tín ngưỡng và không tín ngưỡng",
      "Ưu tiên một số tôn giáo lớn",
      "Tách đạo khỏi đời",
      "Giảm số lượng tổ chức tôn giáo"
    ],
    correctAnswer: 0,
    explanation: "Nguyên tắc cốt lõi được quy định trong Hiến pháp 2013 và Luật Tín ngưỡng, Tôn giáo 2016.",
    category: "chinh-sach-cnxh",
    difficulty: "easy"
  },
  {
    id: 14,
    question: "Luật Tín ngưỡng, Tôn giáo được Quốc hội thông qua năm nào?",
    options: ["2013", "2016", "2018", "2020"],
    correctAnswer: 1,
    explanation: "Luật được thông qua năm 2016 và có hiệu lực từ 1/1/2018.",
    category: "chinh-sach-cnxh",
    difficulty: "easy"
  },
  {
    id: 15,
    question: "Đảng và Nhà nước khuyến khích chức sắc, tín đồ thực hiện phương châm:",
    options: [
      "Sống tốt đời, đẹp đạo",
      "Tách đạo khỏi đời",
      "Không tham gia xã hội",
      "Hạn chế sinh hoạt tôn giáo"
    ],
    correctAnswer: 0,
    explanation: "Phương châm 'Sống tốt đời, đẹp đạo' thể hiện sự hòa hợp giữa đạo đức tôn giáo và nghĩa vụ công dân.",
    category: "chinh-sach-cnxh",
    difficulty: "easy"
  },
  {
    id: 16,
    question: "Giải quyết vấn đề tôn giáo hiện nay cần kết hợp những yếu tố nào?",
    options: [
      "Chính trị, pháp luật và vận động quần chúng",
      "Cưỡng chế hành chính",
      "Tách đạo khỏi chính trị",
      "Chỉ tuyên truyền một chiều"
    ],
    correctAnswer: 0,
    explanation: "Kết hợp ba mặt chính trị – pháp luật – vận động quần chúng là nguyên tắc hiện nay.",
    category: "chinh-sach-cnxh",
    difficulty: "medium"
  },
  {
    id: 17,
    question: "Một biểu hiện lợi dụng tôn giáo để chống phá Nhà nước là:",
    options: [
      "Kích động chia rẽ dân tộc, tôn giáo",
      "Tham gia từ thiện xã hội",
      "Tổ chức lễ hội hợp pháp",
      "Truyền bá giá trị đạo đức tốt đẹp"
    ],
    correctAnswer: 0,
    explanation: "Lợi dụng tôn giáo để chia rẽ dân tộc hoặc gây mất ổn định là hành vi bị cấm theo Luật 2016.",
    category: "chinh-sach-cnxh",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Mục tiêu của chính sách tôn giáo trong thời kỳ quá độ lên CNXH là:",
    options: [
      "Phát huy giá trị đạo đức tôn giáo, củng cố đại đoàn kết dân tộc",
      "Xóa bỏ hoàn toàn tôn giáo",
      "Hạn chế sinh hoạt tôn giáo",
      "Chỉ công nhận tôn giáo truyền thống"
    ],
    correctAnswer: 0,
    explanation: "Chính sách hướng đến phát huy mặt tích cực của tôn giáo, phục vụ mục tiêu CNXH.",
    category: "chinh-sach-cnxh",
    difficulty: "medium"
  }
];

export const quizCategories = [
  { id: 'mac-lenin', name: 'Quan điểm Mác – Lênin', color: 'bg-green-500' },
  { id: 'ton-giao-vn', name: 'Tôn giáo ở Việt Nam hiện nay', color: 'bg-blue-500' },
  { id: 'chinh-sach-cnxh', name: 'Chính sách & quan hệ dân tộc – tôn giáo trong thời kỳ quá độ lên CNXH', color: 'bg-purple-500' },
];

export const difficultyLevels = [
  { id: 'easy', name: 'Dễ', color: 'bg-green-500' },
  { id: 'medium', name: 'Trung bình', color: 'bg-yellow-500' },
  { id: 'hard', name: 'Khó', color: 'bg-red-500' }
];
