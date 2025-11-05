export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: 'mo-bai-gioi-thieu' | 'ban-chat-ton-giao' | 'quan-diem-mac-lenin' | 'ton-giao-trong-qua-do' | 'chinh-sach-ton-giao' |'ket-luan-lien-he';
  difficulty: 'easy' | 'medium' | 'hard';
}

export const quizQuestions: QuizQuestion[] = [
  {
    "id": 1,
    "question": "Tôn giáo là một hiện tượng thuộc lĩnh vực nào của đời sống xã hội?",
    "options": ["Chính trị", "Văn hóa – tinh thần", "Kinh tế", "Pháp lý"],
    "correctAnswer": 1,
    "explanation": "Tôn giáo là hình thái ý thức xã hội thuộc lĩnh vực văn hóa – tinh thần.",
    "category": "mo-bai-gioi-thieu",
    "difficulty": "easy"
  },
  {
    "id": 2,
    "question": "Khoảng bao nhiêu phần trăm dân số Việt Nam có đời sống tín ngưỡng – tôn giáo?",
    "options": ["60%", "70%", "90%", "95%"],
    "correctAnswer": 3,
    "explanation": "Theo Tổng cục Thống kê 2021, hơn 95% dân số Việt Nam có đời sống tín ngưỡng.",
    "category": "mo-bai-gioi-thieu",
    "difficulty": "easy"
  },
  {
    "id": 3,
    "question": "Tôn giáo có vai trò gì trong xã hội hiện nay?",
    "options": [
      "Chỉ mang tính mê tín",
      "Có ảnh hưởng đến đạo đức và văn hóa",
      "Không còn vai trò đáng kể",
      "Là hiện tượng phi xã hội"
    ],
    "correctAnswer": 1,
    "explanation": "Tôn giáo vẫn có vai trò đạo đức, tinh thần và văn hóa quan trọng trong đời sống.",
    "category": "mo-bai-gioi-thieu",
    "difficulty": "easy"
  },
  {
    "id": 4,
    "question": "Việc nghiên cứu tôn giáo trong CNXH có ý nghĩa gì?",
    "options": [
      "Giúp hiểu rõ đời sống tinh thần nhân dân",
      "Để xóa bỏ tôn giáo",
      "Không có giá trị thực tiễn",
      "Chỉ phục vụ mục tiêu học thuật"
    ],
    "correctAnswer": 0,
    "explanation": "Hiểu rõ tôn giáo giúp định hướng chính sách xã hội và củng cố đoàn kết dân tộc.",
    "category": "mo-bai-gioi-thieu",
    "difficulty": "medium"
  },
  {
    "id": 5,
    "question": "Ở Việt Nam hiện nay có bao nhiêu tổ chức tôn giáo được Nhà nước công nhận?",
    "options": ["20", "33", "43", "60"],
    "correctAnswer": 2,
    "explanation": "Theo Ban Tôn giáo Chính phủ (2023), Việt Nam có 43 tổ chức tôn giáo được công nhận hợp pháp.",
    "category": "mo-bai-gioi-thieu",
    "difficulty": "medium"
  },
  {
    "id": 6,
    "question": "Theo C. Mác, tôn giáo là:",
    "options": [
      "Tiếng thở dài của sinh vật bị áp bức",
      "Một công cụ chính trị",
      "Sự phản ánh vật chất",
      "Một hình thức nghệ thuật"
    ],
    "correctAnswer": 0,
    "explanation": "C. Mác coi tôn giáo là tiếng thở dài của sinh vật bị áp bức – phản ánh nỗi khổ hiện thực.",
    "category": "ban-chat-ton-giao",
    "difficulty": "easy"
  },
  {
    "id": 7,
    "question": "Tôn giáo là hình thái ý thức xã hội phản ánh thế giới dưới dạng:",
    "options": ["Hiện thực khách quan", "Hư ảo, siêu nhiên", "Khoa học logic", "Triết học duy lý"],
    "correctAnswer": 1,
    "explanation": "Tôn giáo phản ánh thế giới khách quan qua hình thức hư ảo và niềm tin siêu nhiên.",
    "category": "ban-chat-ton-giao",
    "difficulty": "easy"
  },
  {
    "id": 8,
    "question": "Tôn giáo ra đời do nguyên nhân nào sau đây?",
    "options": [
      "Tự nhiên, xã hội, nhận thức, tâm lý",
      "Chính trị và kinh tế",
      "Ngẫu nhiên",
      "Ảnh hưởng của công nghệ"
    ],
    "correctAnswer": 0,
    "explanation": "Theo Mác, bốn nguyên nhân cơ bản hình thành tôn giáo gồm: tự nhiên, xã hội, nhận thức, tâm lý.",
    "category": "ban-chat-ton-giao",
    "difficulty": "medium"
  },
  {
    "id": 9,
    "question": "Tôn giáo phản ánh điều gì trong xã hội có giai cấp?",
    "options": [
      "Những ảo tưởng phi hiện thực",
      "Nỗi khổ và bất công của con người",
      "Sự phát triển của khoa học",
      "Tư duy duy vật biện chứng"
    ],
    "correctAnswer": 1,
    "explanation": "Tôn giáo phản ánh nỗi đau, sự bất lực và áp bức trong xã hội có giai cấp.",
    "category": "ban-chat-ton-giao",
    "difficulty": "medium"
  },
  {
    "id": 10,
    "question": "Tôn giáo mang tính giai cấp vì:",
    "options": [
      "Chỉ xuất hiện trong giai cấp tư sản",
      "Phản ánh lợi ích của các giai cấp khác nhau",
      "Không có giai cấp nào theo đạo",
      "Là hiện tượng thuần túy cá nhân"
    ],
    "correctAnswer": 1,
    "explanation": "Trong xã hội có giai cấp, tôn giáo chịu ảnh hưởng và phản ánh lợi ích giai cấp.",
    "category": "ban-chat-ton-giao",
    "difficulty": "hard"
  },
  {
    "id": 11,
    "question": "Ph. Ăng-ghen cho rằng tôn giáo vừa là:",
    "options": [
      "Công cụ thống trị vừa là sản phẩm tinh thần của nhân dân",
      "Hiện tượng mê tín đơn thuần",
      "Nguồn gốc khoa học",
      "Hình thức kinh tế đặc biệt"
    ],
    "correctAnswer": 0,
    "explanation": "Ăng-ghen chỉ ra tôn giáo có hai mặt: phản ánh thực tại và có thể bị lợi dụng.",
    "category": "ban-chat-ton-giao",
    "difficulty": "medium"
  },
  {
    "id": 12,
    "question": "Mác nói: 'Tôn giáo là thuốc phiện của nhân dân' – nghĩa là:",
    "options": [
      "Tôn giáo ru ngủ con người nhưng cũng xoa dịu nỗi đau hiện thực",
      "Tôn giáo gây hại cho xã hội",
      "Tôn giáo là nguyên nhân của nghèo đói",
      "Tôn giáo làm suy yếu tinh thần"
    ],
    "correctAnswer": 0,
    "explanation": "Mác dùng hình ảnh ẩn dụ để nói tôn giáo vừa an ủi, vừa làm con người quên mất nguyên nhân khổ đau.",
    "category": "ban-chat-ton-giao",
    "difficulty": "medium"
  },
  {
    "id": 13,
    "question": "Theo Lênin, điều kiện để tôn giáo mất đi là:",
    "options": [
      "Khi xã hội không còn áp bức, bất công",
      "Khi chính quyền cấm đoán triệt để",
      "Khi kinh tế phát triển",
      "Khi dân số giảm"
    ],
    "correctAnswer": 0,
    "explanation": "Tôn giáo chỉ mất đi khi nguyên nhân xã hội sinh ra nó không còn tồn tại.",
    "category": "quan-diem-mac-lenin",
    "difficulty": "medium"
  },
  {
    "id": 14,
    "question": "Ba nguyên tắc cơ bản trong chính sách tôn giáo của Lênin là:",
    "options": [
      "Tự do tín ngưỡng, phân biệt tôn giáo, đoàn kết nhân dân",
      "Tự do tín ngưỡng – không tín ngưỡng, phân biệt lợi dụng tôn giáo, đoàn kết dân tộc",
      "Bài trừ tôn giáo, củng cố chính quyền, phát triển kinh tế",
      "Giới hạn niềm tin và cấm truyền đạo"
    ],
    "correctAnswer": 1,
    "explanation": "Đây là ba nguyên tắc chính trong chính sách tôn giáo của Lênin.",
    "category": "quan-diem-mac-lenin",
    "difficulty": "medium"
  },
  {
    "id": 15,
    "question": "Lênin cho rằng không thể xóa bỏ tôn giáo bằng:",
    "options": [
      "Giáo dục văn hóa",
      "Mệnh lệnh hành chính hay bạo lực",
      "Đối thoại hòa bình",
      "Chính sách kinh tế"
    ],
    "correctAnswer": 1,
    "explanation": "Tôn giáo không thể bị thủ tiêu bằng mệnh lệnh hành chính, mà bằng cải tạo xã hội.",
    "category": "quan-diem-mac-lenin",
    "difficulty": "easy"
  },
  {
    "id": 16,
    "question": "Quan điểm Mác – Lênin về tôn giáo khác với chủ nghĩa vô thần cực đoan ở điểm nào?",
    "options": [
      "Không phủ định quyền tự do tín ngưỡng",
      "Cấm mọi hoạt động tôn giáo",
      "Coi tôn giáo là kẻ thù",
      "Đề cao mê tín"
    ],
    "correctAnswer": 0,
    "explanation": "Mác – Lênin chủ trương tôn trọng tự do tín ngưỡng, không cực đoan bài tôn giáo.",
    "category": "quan-diem-mac-lenin",
    "difficulty": "medium"
  },
  {
    "id": 17,
    "question": "Tư tưởng 'Phân biệt giữa niềm tin tôn giáo chân chính và hành vi lợi dụng tôn giáo' nhằm mục tiêu:",
    "options": [
      "Bảo vệ tín đồ và đấu tranh chống kẻ lợi dụng tôn giáo",
      "Cấm truyền đạo",
      "Loại bỏ toàn bộ tôn giáo",
      "Tách đạo khỏi đời"
    ],
    "correctAnswer": 0,
    "explanation": "Nguyên tắc này giúp phân định rõ giữa tín ngưỡng hợp pháp và hành vi vi phạm pháp luật.",
    "category": "quan-diem-mac-lenin",
    "difficulty": "hard"
  },
  {
    "id": 18,
    "question": "Đảng Cộng sản Việt Nam kế thừa quan điểm Mác – Lênin bằng cách:",
    "options": [
      "Phát huy giá trị tốt đẹp của tôn giáo, đấu tranh với hành vi lợi dụng",
      "Cấm hoạt động tôn giáo",
      "Tách biệt đạo – đời",
      "Ưu tiên một số tôn giáo"
    ],
    "correctAnswer": 0,
    "explanation": "Đại hội XIII của Đảng khẳng định kế thừa và phát triển tư tưởng Mác – Lênin về tôn giáo.",
    "category": "quan-diem-mac-lenin",
    "difficulty": "medium"
  },
  {
    "id": 19,
    "question": "Vì sao trong thời kỳ quá độ, tôn giáo vẫn tồn tại?",
    "options": [
      "Do cơ sở kinh tế – xã hội và nhận thức chưa hoàn thiện",
      "Do Nhà nước chưa mạnh",
      "Do ảnh hưởng tư bản",
      "Do truyền thông hiện đại"
    ],
    "correctAnswer": 0,
    "explanation": "Nguyên nhân chủ yếu: cơ sở kinh tế – xã hội và tâm lý – tín ngưỡng lâu đời.",
    "category": "ton-giao-trong-qua-do",
    "difficulty": "medium"
  },
  {
    "id": 20,
    "question": "Mặt tích cực của tôn giáo trong thời kỳ quá độ là:",
    "options": [
      "Giáo dục đạo đức, nhân ái, tham gia từ thiện",
      "Tuyên truyền chống phá Nhà nước",
      "Phát triển mê tín dị đoan",
      "Lợi dụng tín đồ để kích động"
    ],
    "correctAnswer": 0,
    "explanation": "Tôn giáo góp phần giáo dục đạo đức và thực hiện hoạt động từ thiện.",
    "category": "ton-giao-trong-qua-do",
    "difficulty": "easy"
  },
  {
    "id": 21,
    "question": "Một ví dụ tiêu biểu cho vai trò tích cực của tôn giáo trong đại dịch Covid-19 là:",
    "options": [
      "Giáo hội Phật giáo Việt Nam ủng hộ hàng trăm tỷ đồng phòng dịch",
      "Các tổ chức tôn giáo tạm ngưng hoạt động",
      "Tín đồ từ chối tiêm vaccine",
      "Mê tín lan rộng"
    ],
    "correctAnswer": 0,
    "explanation": "Các tổ chức tôn giáo tích cực tham gia phòng chống dịch, cứu trợ người dân.",
    "category": "ton-giao-trong-qua-do",
    "difficulty": "medium"
  },
  {
    "id": 22,
    "question": "Mặt tiêu cực của tôn giáo trong xã hội hiện nay là:",
    "options": [
      "Một số phần tử lợi dụng tôn giáo để tuyên truyền sai trái",
      "Khuyến khích đạo đức tốt",
      "Tham gia từ thiện",
      "Phát triển văn hóa dân tộc"
    ],
    "correctAnswer": 0,
    "explanation": "Một số tổ chức bị lợi dụng gây mất đoàn kết và an ninh xã hội.",
    "category": "ton-giao-trong-qua-do",
    "difficulty": "medium"
  },
  {
    "id": 23,
    "question": "Theo Báo cáo Ban Tôn giáo Chính phủ 2023, Việt Nam có khoảng bao nhiêu tín đồ?",
    "options": ["10 triệu", "20 triệu", "27 triệu", "40 triệu"],
    "correctAnswer": 2,
    "explanation": "Có hơn 27 triệu tín đồ và 43 tổ chức tôn giáo được công nhận.",
    "category": "ton-giao-trong-qua-do",
    "difficulty": "easy"
  },
  {
    "id": 24,
    "question": "Tôn giáo trong thời kỳ quá độ thể hiện đặc điểm nào sau đây?",
    "options": [
      "Tồn tại lâu dài, có tính hai mặt",
      "Biến mất hoàn toàn",
      "Chỉ còn trong nông thôn",
      "Không có ảnh hưởng xã hội"
    ],
    "correctAnswer": 0,
    "explanation": "Tôn giáo tồn tại lâu dài, vừa có mặt tích cực, vừa có hạn chế.",
    "category": "ton-giao-trong-qua-do",
    "difficulty": "medium"
  },
  {
    "id": 25,
    "question": "Mê tín dị đoan có thể được hạn chế bằng cách nào?",
    "options": [
      "Giáo dục, nâng cao dân trí và hiểu biết khoa học",
      "Cấm mọi hoạt động tôn giáo",
      "Tách đạo khỏi đời",
      "Không can thiệp"
    ],
    "correctAnswer": 0,
    "explanation": "Giáo dục giúp nâng cao nhận thức, tránh hiểu sai về tín ngưỡng.",
    "category": "ton-giao-trong-qua-do",
    "difficulty": "medium"
  },
  {
    "id": 26,
    "question": "Luật Tín ngưỡng, Tôn giáo được thông qua năm:",
    "options": ["2003", "2016", "2013", "2018"],
    "correctAnswer": 1,
    "explanation": "Thông qua 2016, hiệu lực từ 1/1/2018.",
    "category": "chinh-sach-ton-giao",
    "difficulty": "easy"
  },
  {
    "id": 27,
    "question": "Hiến pháp 2013 (Điều 24) khẳng định:",
    "options": [
      "Công dân có quyền tự do tín ngưỡng, tôn giáo",
      "Chỉ công nhận tôn giáo lớn",
      "Cấm nghi lễ ngoài cơ sở thờ tự",
      "Ưu tiên một tôn giáo"
    ],
    "correctAnswer": 0,
    "explanation": "Khẳng định quyền theo hoặc không theo tôn giáo.",
    "category": "chinh-sach-ton-giao",
    "difficulty": "easy"
  },
  {
    "id": 28,
    "question": "Nghị quyết 24-NQ/TW (1990) nhấn mạnh:",
    "options": [
      "Tôn giáo là nhu cầu tinh thần lâu dài, cần phát huy giá trị tốt đẹp",
      "Giảm cơ sở thờ tự",
      "Hạn chế truyền đạo",
      "Bài trừ tôn giáo"
    ],
    "correctAnswer": 0,
    "explanation": "Chuyển từ 'hạn chế' sang 'phát huy giá trị tích cực'.",
    "category": "chinh-sach-ton-giao",
    "difficulty": "medium"
  },
  {
    "id": 29,
    "question": "Nguyên tắc quản lý nhà nước về tôn giáo là:",
    "options": [
      "Bằng pháp luật, bảo đảm bình đẳng giữa các tôn giáo",
      "Bằng mệnh lệnh hành chính",
      "Ưu đãi tôn giáo đông tín đồ",
      "Không cần quản lý"
    ],
    "correctAnswer": 0,
    "explanation": "Bảo đảm tự do, bình đẳng, trong khuôn khổ pháp luật.",
    "category": "chinh-sach-ton-giao",
    "difficulty": "medium"
  },
  {
    "id": 30,
    "question": "Phương châm 'tốt đời, đẹp đạo' thể hiện:",
    "options": [
      "Hòa hợp đạo đức tôn giáo và nghĩa vụ công dân",
      "Tách đạo khỏi đời",
      "Giảm sinh hoạt tôn giáo",
      "Chỉ coi trọng đạo đức tôn giáo"
    ],
    "correctAnswer": 0,
    "explanation": "Khuyến khích tín đồ sống tốt, góp phần xã hội.",
    "category": "chinh-sach-ton-giao",
    "difficulty": "easy"
  },
  {
    "id": 31,
    "question": "Một nội dung trọng tâm của chính sách hiện hành:",
    "options": [
      "Tôn trọng tự do tín ngưỡng và không tín ngưỡng",
      "Hạn chế nghi lễ",
      "Ưu tiên tôn giáo truyền thống",
      "Phân biệt lương – giáo"
    ],
    "correctAnswer": 0,
    "explanation": "Nguyên tắc xuyên suốt trong văn kiện và luật.",
    "category": "chinh-sach-ton-giao",
    "difficulty": "easy"
  },
  {
    "id": 32,
    "question": "Cách xử lý đúng với hành vi lợi dụng tôn giáo:",
    "options": [
      "Kết hợp pháp luật, tuyên truyền, đối thoại",
      "Cấm tất cả hoạt động",
      "Không xử lý để tránh va chạm",
      "Phân biệt đối xử với tín đồ"
    ],
    "correctAnswer": 0,
    "explanation": "Vừa thượng tôn pháp luật, vừa giữ ổn định xã hội.",
    "category": "chinh-sach-ton-giao",
    "difficulty": "hard"
  },
  {
    "id": 33,
    "question": "Một minh chứng cho hợp tác quốc tế tôn giáo của Việt Nam:",
    "options": [
      "Tổ chức/đón sự kiện tôn giáo lớn, đối thoại tôn giáo – văn hóa",
      "Đóng cửa biên giới tôn giáo",
      "Cấm tiếp xúc quốc tế",
      "Chỉ sinh hoạt nội bộ"
    ],
    "correctAnswer": 0,
    "explanation": "Hội nhập, đối thoại, tôn trọng luật pháp quốc tế.",
    "category": "chinh-sach-ton-giao",
    "difficulty": "medium"
  },
  {
    "id": 34,
    "question": "Kết luận cốt lõi về tôn giáo trong quá độ lên CNXH:",
    "options": [
      "Tồn tại khách quan, có thể phát huy tích cực",
      "Sẽ biến mất ngay",
      "Chỉ còn ở nông thôn",
      "Không liên quan xây dựng CNXH"
    ],
    "correctAnswer": 0,
    "explanation": "Chủ trương: tôn trọng – định hướng – phát huy.",
    "category": "ket-luan-lien-he",
    "difficulty": "easy"
  },
  {
    "id": 35,
    "question": "Ý nghĩa của giải quyết đúng đắn vấn đề tôn giáo là:",
    "options": [
      "Củng cố đại đoàn kết, ổn định chính trị – xã hội",
      "Giảm nghi lễ tôn giáo",
      "Tăng cạnh tranh tôn giáo",
      "Hạn chế quyền công dân"
    ],
    "correctAnswer": 0,
    "explanation": "Mục tiêu hướng tới phát triển bền vững.",
    "category": "ket-luan-lien-he",
    "difficulty": "medium"
  },
  {
    "id": 36,
    "question": "Liên hệ sinh viên: Hành động phù hợp với 'tốt đời, đẹp đạo' là:",
    "options": [
      "Tham gia hoạt động thiện nguyện, sống có trách nhiệm",
      "Truyền bá mê tín",
      "Kỳ thị người khác tôn giáo",
      "Phá hoại cơ sở thờ tự"
    ],
    "correctAnswer": 0,
    "explanation": "Ứng xử công dân – đạo đức xã hội tích cực.",
    "category": "ket-luan-lien-he",
    "difficulty": "easy"
  },
  {
    "id": 37,
    "question": "Trong hội nhập, tôn giáo có thể đóng góp gì?",
    "options": [
      "Thúc đẩy đối thoại, hòa bình, nhân văn",
      "Kích động cô lập",
      "Gây xung đột văn hóa",
      "Ngăn cản hợp tác quốc tế"
    ],
    "correctAnswer": 0,
    "explanation": "Giá trị nhân văn – đạo đức của tôn giáo hỗ trợ đối thoại.",
    "category": "ket-luan-lien-he",
    "difficulty": "medium"
  },
  {
    "id": 38,
    "question": "Một tiêu chí đánh giá 'đồng hành cùng dân tộc' của tôn giáo là:",
    "options": [
      "Góp phần xây dựng đời sống văn hóa, đạo đức; tuân thủ pháp luật",
      "Tách khỏi cộng đồng",
      "Phủ nhận trách nhiệm công dân",
      "Chỉ chú trọng nghi lễ"
    ],
    "correctAnswer": 0,
    "explanation": "Hài hòa đạo – đời, thượng tôn pháp luật.",
    "category": "ket-luan-lien-he",
    "difficulty": "hard"
  },
  {
    "id": 39,
    "question": "Nếu phát hiện thông tin kích động chia rẽ tôn giáo trên mạng, cách ứng xử đúng là:",
    "options": [
      "Báo cơ quan chức năng, không chia sẻ; tuyên truyền phản biện đúng đắn",
      "Chia sẻ để mọi người biết",
      "Tham gia tranh cãi cực đoan",
      "Bỏ qua hoàn toàn"
    ],
    "correctAnswer": 0,
    "explanation": "Kết hợp pháp luật – truyền thông có trách nhiệm.",
    "category": "ket-luan-lien-he",
    "difficulty": "hard"
  },
  {
    "id": 40,
    "question": "Một thông điệp kết thúc phù hợp với bài học là:",
    "options": [
      "Tôn trọng tự do tín ngưỡng, phát huy giá trị tốt đẹp, đoàn kết xây dựng CNXH",
      "Giảm sinh hoạt tôn giáo",
      "Tách đạo khỏi đời sống",
      "Ưu tiên một tôn giáo"
    ],
    "correctAnswer": 0,
    "explanation": "Thông điệp bám sát quan điểm Mác – Lênin, tư tưởng Hồ Chí Minh và chính sách hiện hành.",
    "category": "ket-luan-lien-he",
    "difficulty": "easy"
  }
];

export const quizCategories = [
  { id: 'mo-bai-gioi-thieu', name: 'Mở bài giới thiệu', color: 'bg-blue-500' },
  { id: 'ban-chat-ton-giao', name: 'Bàn chắt tôn giáo', color: 'bg-red-500' },
  { id: 'quan-diem-mac-lenin', name: 'Quan điểm Mác – Lênin', color: 'bg-green-500' },
  { id: 'ton-giao-trong-qua-do', name: 'Tôn giáo trong quá độ', color: 'bg-purple-500' },
  { id: 'chinh-sach-ton-giao', name: 'Chính sách tôn giáo', color: 'bg-orange-500' },
  { id: 'ket-luan-lien-he', name: 'Kết luận liên hệ', color: 'bg-orange-500' }
];

export const difficultyLevels = [
  { id: 'easy', name: 'Dễ', color: 'bg-green-500' },
  { id: 'medium', name: 'Trung bình', color: 'bg-yellow-500' },
  { id: 'hard', name: 'Khó', color: 'bg-red-500' }
];
