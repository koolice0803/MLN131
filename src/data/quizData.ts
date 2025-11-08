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
    question: "Câu nói 'Tôn giáo là thuốc phiện của nhân dân' hàm ý điều gì?",
    options: [
      "Tôn giáo vừa an ủi nỗi khổ, vừa khiến con người quên mất nguyên nhân thật của nó",
      "Tôn giáo hoàn toàn tiêu cực",
      "Tôn giáo là mê tín thuần túy",
      "Tôn giáo chỉ tồn tại trong xã hội tư bản"
    ],
    correctAnswer: 0,
    explanation: "Mác dùng hình ảnh ẩn dụ để nói về hai mặt của tôn giáo – an ủi và che mờ hiện thực.",
    category: "mac-lenin",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Nguồn gốc chủ yếu dẫn đến sự ra đời của tôn giáo là:",
    options: [
      "Tự nhiên, xã hội, nhận thức và tâm lý",
      "Kinh tế và chính trị",
      "Phong tục dân gian",
      "Ảnh hưởng từ tôn giáo khác"
    ],
    correctAnswer: 0,
    explanation: "Theo quan điểm Mác – Lênin, bốn nguyên nhân cơ bản hình thành tôn giáo là tự nhiên, xã hội, nhận thức và tâm lý.",
    category: "mac-lenin",
    difficulty: "easy"
  },
  {
    id: 4,
    question: "Ph. Ăng-ghen cho rằng tôn giáo có đặc điểm gì?",
    options: [
      "Chỉ có tính tiêu cực",
      "Vừa là sản phẩm tinh thần của nhân dân, vừa có thể bị lợi dụng",
      "Chỉ phục vụ giai cấp thống trị",
      "Là nguồn gốc của khoa học"
    ],
    correctAnswer: 1,
    explanation: "Ăng-ghen nêu rõ tôn giáo có hai mặt: phản ánh tinh thần và có thể bị lợi dụng.",
    category: "mac-lenin",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "Theo Lênin, tôn giáo chỉ mất đi khi nào?",
    options: [
      "Khi xã hội không còn áp bức, bất công, nghèo đói",
      "Khi có lệnh của nhà nước",
      "Khi con người mất niềm tin",
      "Khi tôn giáo bị cấm"
    ],
    correctAnswer: 0,
    explanation: "Tôn giáo chỉ mất đi khi điều kiện xã hội sinh ra nó không còn.",
    category: "mac-lenin",
    difficulty: "medium"
  },
  {
    id: 6,
    question: "Tôn giáo mang tính giai cấp vì:",
    options: [
      "Phản ánh lợi ích và ý thức của các giai cấp khác nhau",
      "Chỉ tồn tại trong giai cấp thống trị",
      "Không liên quan đến xã hội",
      "Là hiện tượng tự nhiên"
    ],
    correctAnswer: 0,
    explanation: "Tôn giáo trong xã hội có giai cấp luôn gắn với lợi ích giai cấp nhất định.",
    category: "mac-lenin",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "Tính lịch sử của tôn giáo thể hiện ở điểm nào?",
    options: [
      "Nó biến đổi cùng sự phát triển xã hội",
      "Không thay đổi theo thời gian",
      "Chỉ tồn tại ở xã hội cổ đại",
      "Là sản phẩm bất biến của tự nhiên"
    ],
    correctAnswer: 0,
    explanation: "Tôn giáo mang tính lịch sử, thay đổi cùng điều kiện kinh tế – xã hội.",
    category: "mac-lenin",
    difficulty: "easy"
  },
  {
    id: 8,
    question: "Theo Mác – Lênin, có thể xóa bỏ tôn giáo bằng biện pháp hành chính không?",
    options: [
      "Không thể, vì tôn giáo có cơ sở xã hội sâu xa",
      "Có thể, nếu nhà nước đủ mạnh",
      "Tùy từng quốc gia",
      "Chỉ trong thời chiến"
    ],
    correctAnswer: 0,
    explanation: "Lênin khẳng định không thể xóa bỏ tôn giáo bằng mệnh lệnh hành chính.",
    category: "mac-lenin",
    difficulty: "medium"
  },
  {
    id: 9,
    question: "Quan điểm vô thần khoa học của chủ nghĩa Mác – Lênin khác gì với vô thần cực đoan?",
    options: [
      "Tôn trọng tự do tín ngưỡng, không phủ nhận niềm tin tôn giáo chân chính",
      "Bài trừ mọi hình thức tôn giáo",
      "Cấm nghi lễ tôn giáo",
      "Chống lại tất cả tín đồ"
    ],
    correctAnswer: 0,
    explanation: "Vô thần khoa học tôn trọng tự do tín ngưỡng, khác với vô thần cực đoan.",
    category: "mac-lenin",
    difficulty: "hard"
  },
  {
    id: 10,
    question: "Tôn giáo phản ánh hiện thực khách quan theo cách:",
    options: ["Hư ảo", "Khoa học", "Chính xác", "Logic duy vật"],
    correctAnswer: 0,
    explanation: "Tôn giáo phản ánh hiện thực khách quan một cách hư ảo, qua niềm tin siêu nhiên.",
    category: "mac-lenin",
    difficulty: "easy"
  },
  {
    id: 11,
    question: "Mục tiêu cuối cùng của việc giải quyết vấn đề tôn giáo là:",
    options: [
      "Xóa bỏ ảnh hưởng tiêu cực, phát huy giá trị nhân văn tích cực",
      "Hạn chế mọi hoạt động tôn giáo",
      "Phân biệt người có đạo – không đạo",
      "Cấm tuyên truyền tôn giáo"
    ],
    correctAnswer: 0,
    explanation: "Giải quyết đúng đắn tôn giáo giúp phát huy giá trị đạo đức và ổn định xã hội.",
    category: "mac-lenin",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "Tôn giáo và đạo đức có mối quan hệ như thế nào?",
    options: [
      "Có thể bổ trợ cho nhau trong việc hướng thiện con người",
      "Không liên quan nhau",
      "Luôn đối lập nhau",
      "Đạo đức cao hơn tôn giáo"
    ],
    correctAnswer: 0,
    explanation: "Nhiều tôn giáo chứa đựng giá trị đạo đức phù hợp với xã hội mới.",
    category: "mac-lenin",
    difficulty: "easy"
  },
  {
    id: 13,
    question: "Theo Lênin, để giảm ảnh hưởng tiêu cực của tôn giáo cần:",
    options: [
      "Nâng cao dân trí và cải thiện đời sống nhân dân",
      "Tuyên truyền chống tôn giáo",
      "Cấm hoạt động tôn giáo",
      "Thay đổi tín ngưỡng truyền thống"
    ],
    correctAnswer: 0,
    explanation: "Lênin nhấn mạnh giáo dục và cải thiện đời sống là giải pháp cơ bản.",
    category: "mac-lenin",
    difficulty: "medium"
  },
  {
    id: 14,
    question: "Phương pháp tiếp cận tôn giáo của Mác – Lênin là:",
    options: [
      "Duy vật lịch sử",
      "Duy tâm chủ quan",
      "Siêu hình tôn giáo",
      "Thần học chính thống"
    ],
    correctAnswer: 0,
    explanation: "Mác – Lênin tiếp cận tôn giáo từ lập trường duy vật lịch sử.",
    category: "mac-lenin",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "Tôn giáo tồn tại lâu dài vì:",
    options: [
      "Nhu cầu tinh thần và những điều kiện xã hội chưa hoàn thiện",
      "Nhà nước bảo hộ",
      "Tín đồ đông đảo",
      "Truyền thông hiện đại"
    ],
    correctAnswer: 0,
    explanation: "Tôn giáo tồn tại vì điều kiện xã hội và tâm lý con người.",
    category: "mac-lenin",
    difficulty: "medium"
  },
  {
    id: 16,
    question: "Theo Mác, khi xã hội đạt tới trình độ phát triển cao, tôn giáo sẽ:",
    options: [
      "Tự tiêu vong dần",
      "Bị xóa bỏ hoàn toàn",
      "Phát triển mạnh hơn",
      "Không thay đổi"
    ],
    correctAnswer: 0,
    explanation: "Tôn giáo sẽ tự tiêu vong khi các điều kiện xã hội sinh ra nó không còn.",
    category: "mac-lenin",
    difficulty: "medium"
  },
  {
    id: 17,
    question: "Câu nói 'tôn giáo là tiếng thở dài của sinh vật bị áp bức' thể hiện:",
    options: [
      "Sự cảm thông của Mác với nỗi khổ của con người",
      "Thái độ phủ nhận tôn giáo",
      "Tư tưởng vô thần cực đoan",
      "Sự phản đối tín ngưỡng"
    ],
    correctAnswer: 0,
    explanation: "Mác thấu hiểu nỗi khổ tinh thần của con người trong xã hội bất công.",
    category: "mac-lenin",
    difficulty: "easy"
  },

  // ------------------- PHẦN 2 -------------------
  // Tôn giáo ở Việt Nam hiện nay
  {
    id: 18,
    question: "Đặc điểm nổi bật của đời sống tôn giáo ở Việt Nam là:",
    options: [
      "Đa dạng, hòa hợp, gắn bó với văn hóa dân tộc",
      "Xung đột gay gắt",
      "Bị cấm đoán hoàn toàn",
      "Tách biệt khỏi đời sống xã hội"
    ],
    correctAnswer: 0,
    explanation: "Việt Nam là quốc gia có truyền thống khoan dung và hòa hợp tôn giáo.",
    category: "ton-giao-vn",
    difficulty: "easy"
  },
  {
    id: 19,
    question: "Việt Nam hiện có khoảng bao nhiêu tín đồ tôn giáo?",
    options: ["10 triệu", "20 triệu", "27 triệu", "35 triệu"],
    correctAnswer: 2,
    explanation: "Theo Ban Tôn giáo Chính phủ, có khoảng 27 triệu tín đồ tôn giáo.",
    category: "ton-giao-vn",
    difficulty: "easy"
  },
  {
    id: 20,
    question: "Tôn giáo Việt Nam có đặc điểm gì về văn hóa?",
    options: [
      "Mang đậm bản sắc dân tộc và được Việt hóa",
      "Tách biệt với truyền thống dân tộc",
      "Chịu ảnh hưởng hoàn toàn phương Tây",
      "Không liên quan đến văn hóa"
    ],
    correctAnswer: 0,
    explanation: "Các tôn giáo Việt Nam như Phật giáo, Cao Đài, Hòa Hảo đều gắn với văn hóa dân tộc.",
    category: "ton-giao-vn",
    difficulty: "medium"
  },
  {
    id: 21,
    question: "Phương châm 'tốt đời, đẹp đạo' thể hiện:",
    options: [
      "Sự hòa hợp giữa đạo đức tôn giáo và nghĩa vụ công dân",
      "Tách biệt đạo và đời",
      "Hạn chế hoạt động tôn giáo",
      "Ưu tiên một tôn giáo"
    ],
    correctAnswer: 0,
    explanation: "Phương châm này thể hiện sự kết hợp hài hòa giữa đạo và đời.",
    category: "ton-giao-vn",
    difficulty: "easy"
  },
  {
    id: 22,
    question: "Vai trò của các chức sắc tôn giáo ở Việt Nam hiện nay là:",
    options: [
      "Cầu nối giữa tôn giáo và xã hội, tham gia công tác xã hội",
      "Tách biệt với cộng đồng",
      "Không tham gia xã hội",
      "Chỉ lo nghi lễ tôn giáo"
    ],
    correctAnswer: 0,
    explanation: "Các chức sắc có vai trò quan trọng trong xây dựng khối đại đoàn kết dân tộc.",
    category: "ton-giao-vn",
    difficulty: "medium"
  },
  {
    id: 23,
    question: "Niềm tin tôn giáo ở Việt Nam hướng đến giá trị:",
    options: [
      "Nhân ái, vị tha, hòa hợp và hướng thiện",
      "Phủ định đạo đức xã hội",
      "Cực đoan và chia rẽ",
      "Chủ nghĩa cá nhân"
    ],
    correctAnswer: 0,
    explanation: "Đa số tôn giáo Việt Nam đều hướng con người tới giá trị chân – thiện – mỹ.",
    category: "ton-giao-vn",
    difficulty: "medium"
  },
  {
    id: 24,
    question: "Nguyên nhân khiến tôn giáo ở Việt Nam vẫn phát triển là:",
    options: [
      "Nhu cầu tinh thần của người dân và chính sách tự do tín ngưỡng đúng đắn",
      "Do Nhà nước ép buộc",
      "Do ảnh hưởng nước ngoài",
      "Do thiếu hiểu biết"
    ],
    correctAnswer: 0,
    explanation: "Tôn giáo vẫn tồn tại vì đáp ứng nhu cầu tinh thần và được Nhà nước tôn trọng.",
    category: "ton-giao-vn",
    difficulty: "medium"
  },
  {
    id: 25,
    question: "Hoạt động tôn giáo tích cực nào được khuyến khích ở Việt Nam?",
    options: [
      "Từ thiện xã hội, bảo vệ môi trường, giáo dục đạo đức",
      "Tuyên truyền mê tín dị đoan",
      "Cách ly xã hội",
      "Bài trừ văn hóa dân tộc"
    ],
    correctAnswer: 0,
    explanation: "Nhiều tôn giáo tham gia từ thiện, giáo dục và công tác xã hội.",
    category: "ton-giao-vn",
    difficulty: "medium"
  },
  {
    id: 26,
    question: "Một số hiện tượng tiêu cực trong sinh hoạt tôn giáo là:",
    options: [
      "Mê tín dị đoan, lợi dụng tôn giáo để trục lợi",
      "Từ thiện xã hội",
      "Giáo dục đạo đức",
      "Hoạt động văn hóa"
    ],
    correctAnswer: 0,
    explanation: "Một số phần tử lợi dụng tôn giáo gây ảnh hưởng xấu xã hội.",
    category: "ton-giao-vn",
    difficulty: "medium"
  },
  {
    id: 27,
    question: "Yếu tố giúp Việt Nam không xảy ra xung đột tôn giáo là:",
    options: [
      "Chính sách đoàn kết và tôn trọng tự do tín ngưỡng",
      "Kiểm soát chặt chẽ bằng bạo lực",
      "Cấm truyền đạo",
      "Chỉ công nhận một tôn giáo"
    ],
    correctAnswer: 0,
    explanation: "Chính sách đoàn kết và tôn trọng giúp các tôn giáo chung sống hòa bình.",
    category: "ton-giao-vn",
    difficulty: "hard"
  },
  {
    id: 28,
    question: "Tôn giáo ở Việt Nam đóng góp vào lĩnh vực nào sau đây?",
    options: [
      "Giáo dục, y tế, từ thiện xã hội",
      "Chính trị đối lập",
      "Kinh doanh",
      "Phân hóa xã hội"
    ],
    correctAnswer: 0,
    explanation: "Tôn giáo tham gia nhiều hoạt động xã hội tích cực.",
    category: "ton-giao-vn",
    difficulty: "medium"
  },
  {
    id: 29,
    question: "Phật giáo Việt Nam có vai trò gì trong xã hội?",
    options: [
      "Giáo dục đạo đức, hướng thiện, tham gia hoạt động từ thiện",
      "Tách khỏi xã hội",
      "Chống lại nhà nước",
      "Phát triển mê tín"
    ],
    correctAnswer: 0,
    explanation: "Phật giáo là tôn giáo lớn, có đóng góp tích cực cho xã hội.",
    category: "ton-giao-vn",
    difficulty: "easy"
  },
  {
    id: 30,
    question: "Cao Đài và Hòa Hảo là tôn giáo thể hiện điều gì đặc trưng?",
    options: [
      "Sự Việt hóa trong tín ngưỡng tôn giáo",
      "Ảnh hưởng hoàn toàn phương Tây",
      "Tách biệt văn hóa dân tộc",
      "Không có giá trị tinh thần"
    ],
    correctAnswer: 0,
    explanation: "Hai tôn giáo nội sinh phản ánh bản sắc và sáng tạo văn hóa Việt.",
    category: "ton-giao-vn",
    difficulty: "hard"
  },
  {
    id: 31,
    question: "Giáo hội Công giáo Việt Nam ngày nay hướng tới điều gì?",
    options: [
      "Đồng hành cùng dân tộc, đóng góp cho phát triển xã hội",
      "Tách khỏi xã hội",
      "Không tham gia công tác xã hội",
      "Đối lập với chính quyền"
    ],
    correctAnswer: 0,
    explanation: "Đường hướng mục vụ nhấn mạnh đồng hành cùng dân tộc, phục vụ cộng đồng.",
    category: "ton-giao-vn",
    difficulty: "medium"
  },
  {
    id: 32,
    question: "Một biện pháp giảm mê tín dị đoan hiệu quả là:",
    options: [
      "Giáo dục khoa học, nâng cao dân trí",
      "Cấm mọi lễ hội",
      "Tăng thu phí nghi lễ",
      "Không can thiệp"
    ],
    correctAnswer: 0,
    explanation: "Giải pháp bền vững là giáo dục và nâng cao nhận thức cộng đồng.",
    category: "ton-giao-vn",
    difficulty: "easy"
  },
  {
    id: 33,
    question: "Một tiêu chí đánh giá tôn giáo 'đồng hành cùng dân tộc' là:",
    options: [
      "Tuân thủ pháp luật, góp phần đoàn kết và an sinh xã hội",
      "Tách biệt cộng đồng",
      "Đề cao chủ nghĩa cực đoan",
      "Phủ nhận văn hóa dân tộc"
    ],
    correctAnswer: 0,
    explanation: "Tiêu chí then chốt: thượng tôn pháp luật và đóng góp xã hội.",
    category: "ton-giao-vn",
    difficulty: "hard"
  },
  {
    id: 34,
    question: "Hoạt động liên tôn nào phù hợp trong môi trường đại học?",
    options: [
      "Chương trình thiện nguyện chung, đối thoại giá trị",
      "Tổ chức tranh cãi công khai",
      "Cấm sinh hoạt tôn giáo cá nhân",
      "Bắt buộc theo một tôn giáo"
    ],
    correctAnswer: 0,
    explanation: "Hoạt động liên tôn giúp gắn kết, lan tỏa giá trị nhân văn.",
    category: "ton-giao-vn",
    difficulty: "medium"
  },

  // ------------------- PHẦN 3 -------------------
  // Chính sách & quan hệ dân tộc – tôn giáo trong thời kỳ quá độ lên CNXH
  {
    id: 35,
    question: "Hiến pháp 2013 (Điều 24) khẳng định điều gì?",
    options: [
      "Quyền tự do tín ngưỡng, tôn giáo; theo hoặc không theo tôn giáo",
      "Chỉ công nhận tôn giáo lớn",
      "Giới hạn nghi lễ",
      "Không đề cập tôn giáo"
    ],
    correctAnswer: 0,
    explanation: "Hiến pháp bảo đảm quyền tự do tín ngưỡng, tôn giáo của công dân.",
    category: "chinh-sach-cnxh",
    difficulty: "easy"
  },
  {
    id: 36,
    question: "Luật Tín ngưỡng, Tôn giáo có hiệu lực từ năm nào?",
    options: ["2016", "2017", "2018", "2019"],
    correctAnswer: 2,
    explanation: "Có hiệu lực từ 1/1/2018 (thông qua năm 2016).",
    category: "chinh-sach-cnxh",
    difficulty: "easy"
  },
  {
    id: 37,
    question: "Nghị quyết 24-NQ/TW (1990) nhấn mạnh điều gì?",
    options: [
      "Tôn giáo là nhu cầu tinh thần lâu dài; phát huy giá trị tốt đẹp",
      "Hạn chế tối đa sinh hoạt tôn giáo",
      "Chỉ công nhận một số tôn giáo",
      "Tách đạo khỏi đời"
    ],
    correctAnswer: 0,
    explanation: "Đổi mới nhận thức: phát huy mặt tích cực, đấu tranh hành vi lợi dụng tôn giáo.",
    category: "chinh-sach-cnxh",
    difficulty: "medium"
  },
  {
    id: 38,
    question: "Nguyên tắc quản lý nhà nước về tôn giáo là:",
    options: [
      "Bằng pháp luật, bảo đảm bình đẳng giữa các tôn giáo",
      "Bằng mệnh lệnh hành chính",
      "Ưu tiên tôn giáo đông tín đồ",
      "Không cần quản lý"
    ],
    correctAnswer: 0,
    explanation: "Quản lý bằng pháp luật, tôn trọng tự do và bình đẳng.",
    category: "chinh-sach-cnxh",
    difficulty: "medium"
  },
  {
    id: 39,
    question: "Phương châm xuyên suốt của chính sách tôn giáo là:",
    options: [
      "Tôn trọng tự do tín ngưỡng; phát huy tốt đời, đẹp đạo",
      "Giảm sinh hoạt tôn giáo",
      "Ưu tiên một tôn giáo",
      "Tách đạo – đời"
    ],
    correctAnswer: 0,
    explanation: "Bảo đảm quyền tự do; phát huy giá trị tôn giáo vì lợi ích chung.",
    category: "chinh-sach-cnxh",
    difficulty: "easy"
  },
  {
    id: 40,
    question: "Xử lý hành vi lợi dụng tôn giáo đúng đắn là:",
    options: [
      "Kết hợp pháp luật, tuyên truyền, đối thoại",
      "Cấm tất cả hoạt động",
      "Bỏ qua để tránh va chạm",
      "Phân biệt đối xử với tín đồ"
    ],
    correctAnswer: 0,
    explanation: "Vừa thượng tôn pháp luật, vừa giữ ổn định xã hội.",
    category: "chinh-sach-cnxh",
    difficulty: "hard"
  },
  {
    id: 41,
    question: "Mục tiêu chính của chính sách tôn giáo trong thời kỳ quá độ là:",
    options: [
      "Củng cố đại đoàn kết, phát huy giá trị đạo đức tôn giáo",
      "Giảm số người theo đạo",
      "Tách đạo khỏi đời",
      "Giới hạn nghi lễ"
    ],
    correctAnswer: 0,
    explanation: "Phục vụ mục tiêu xây dựng CNXH, ổn định và phát triển bền vững.",
    category: "chinh-sach-cnxh",
    difficulty: "medium"
  },
  {
    id: 42,
    question: "Một biểu hiện lợi dụng tôn giáo để chống phá là:",
    options: [
      "Kích động chia rẽ dân tộc, tôn giáo",
      "Từ thiện xã hội",
      "Giáo dục đạo đức",
      "Hoạt động văn hóa"
    ],
    correctAnswer: 0,
    explanation: "Hành vi bị cấm và phải xử lý theo pháp luật.",
    category: "chinh-sach-cnxh",
    difficulty: "hard"
  },
  {
    id: 43,
    question: "Quan điểm về bình đẳng tôn giáo thể hiện ở:",
    options: [
      "Mọi tôn giáo đều bình đẳng trước pháp luật",
      "Ưu tiên tôn giáo lớn",
      "Cấm tôn giáo mới",
      "Chỉ công nhận tôn giáo truyền thống"
    ],
    correctAnswer: 0,
    explanation: "Nguyên tắc pháp quyền XHCN: không phân biệt đối xử.",
    category: "chinh-sach-cnxh",
    difficulty: "medium"
  },
  {
    id: 44,
    question: "Cách tiếp cận đúng khi xây dựng chính sách tôn giáo là:",
    options: [
      "Lịch sử – cụ thể, đối thoại, đồng hành cùng các tổ chức tôn giáo",
      "Áp đặt một chiều",
      "Loại bỏ tôn giáo khỏi xã hội",
      "Phân biệt lương – giáo"
    ],
    correctAnswer: 0,
    explanation: "Quan điểm lịch sử – cụ thể bảo đảm tính thực tiễn và đồng thuận xã hội.",
    category: "chinh-sach-cnxh",
    difficulty: "hard"
  },
  {
    id: 45,
    question: "Một ví dụ về hợp tác quốc tế trong lĩnh vực tôn giáo là:",
    options: [
      "Đối thoại tôn giáo – văn hóa, tham gia sáng kiến vì hòa bình",
      "Đóng cửa với các tổ chức quốc tế",
      "Cấm tiếp xúc",
      "Không tham gia diễn đàn"
    ],
    correctAnswer: 0,
    explanation: "Phù hợp đường lối đối ngoại và chính sách tôn giáo của Việt Nam.",
    category: "chinh-sach-cnxh",
    difficulty: "medium"
  },
  {
    id: 46,
    question: "Trong xử lý vụ việc tôn giáo, nguyên tắc '3 cùng' phù hợp là:",
    options: [
      "Cùng lắng nghe – cùng đối thoại – cùng tuân luật",
      "Cưỡng chế – áp đặt – xử nhanh",
      "Làm ngơ – bỏ qua – phó mặc",
      "Ưu tiên số đông – bỏ qua thiểu số"
    ],
    correctAnswer: 0,
    explanation: "Tiếp cận mềm dẻo nhưng kiên định pháp luật giúp ổn định bền vững.",
    category: "chinh-sach-cnxh",
    difficulty: "hard"
  },
  {
    id: 47,
    question: "Chỉ báo đánh giá đóng góp tích cực của tổ chức tôn giáo gồm:",
    options: [
      "Số hoạt động an sinh, người hưởng lợi; tuân thủ pháp luật",
      "Số lượng nghi lễ",
      "Mức độ lan truyền mê tín",
      "Quy mô cơ sở thờ tự"
    ],
    correctAnswer: 0,
    explanation: "Đánh giá theo tác động xã hội và tính pháp luật.",
    category: "chinh-sach-cnxh",
    difficulty: "medium"
  },
  {
    id: 48,
    question: "Khi xây dựng chính sách, cần bảo đảm điều gì để tránh định kiến tôn giáo?",
    options: [
      "Đối thoại, tham vấn với đại diện các tôn giáo",
      "Chỉ dựa vào ý kiến hành chính",
      "Tránh tham vấn học thuật",
      "Bỏ qua ý kiến cộng đồng"
    ],
    correctAnswer: 0,
    explanation: "Tăng tham vấn giúp chính sách thực tế và được ủng hộ.",
    category: "chinh-sach-cnxh",
    difficulty: "medium"
  },
  {
    id: 49,
    question: "Mối quan hệ dân tộc – tôn giáo ở Việt Nam hiện nay được định hướng là:",
    options: [
      "Đoàn kết, hòa hợp, cùng phát triển trong khuôn khổ pháp luật",
      "Cạnh tranh ảnh hưởng",
      "Tách rời nhau",
      "Không liên quan"
    ],
    correctAnswer: 0,
    explanation: "Quan điểm xuyên suốt: đoàn kết lương – giáo, gắn đạo với đời.",
    category: "chinh-sach-cnxh",
    difficulty: "easy"
  },
  {
    id: 50,
    question: "Thông điệp kết luận phù hợp với đường lối của Đảng về tôn giáo là:",
    options: [
      "Tôn trọng tự do tín ngưỡng; phát huy giá trị tốt đẹp của các tôn giáo; đoàn kết xây dựng CNXH",
      "Giảm sinh hoạt tôn giáo",
      "Tách đạo khỏi đời",
      "Ưu tiên một tôn giáo"
    ],
    correctAnswer: 0,
    explanation: "Tóm lược đúng định hướng chính sách tôn giáo hiện nay.",
    category: "chinh-sach-cnxh",
    difficulty: "easy"
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
