import TAXPREP from '../assets/images/tax-prep.png';
import BOOKKEEPING from '../assets/images/bookkeeping.png';
import PAYROLL from '../assets/images/payroll.png';
import FORMATION from '../assets/images/formation.png';
import REPRESENTATION from '../assets/images/represent-taxpayer.png';
import ADVISORY from '../assets/images/advisory.png';
const pageData = {
	vn: {
		navbar: {
			home: 'Trang Chủ',
			services: 'Dịch Vụ',
			pricing: 'Bảng Giá',
			about: 'Về Chúng Tôi',
			contact: 'Liên Hệ',
		},
		hero: {
			subheadline:
				'Được Tin Cậy Bởi Các Chủ Doanh Nghiệp Và Cá Nhân. Tập Trung Vào Thành Công Của Bạn.',
			title: {
				first: 'Sổ Sách Rõ Ràng',
				second: 'Tự Tin Khai Báo',
				third: 'Tăng Trưởng Thông Minh',
			},
			subtitle:
				'IT CPA & Advisory, PLLC giúp chủ doanh nghiệp và cá nhân tuân thủ luật thuế, tiết kiệm tối đa thuế, và xây dựng nền tảng tài chính vững mạnh mà không căng thẳng.',
			cta: 'Đặt Lịch Tư Vấn',
			trust_badges: [
				{
					id: 'trust-badge-1',
					icon: 'shield-check',
					headline: 'Tuân Thủ IRS',
					text: 'Luôn sẵn sàng kiểm toán',
				},
				{
					id: 'trust-badge-2',
					icon: 'lock',
					headline: 'Bảo Mật Dữ Liệu và Tự Tin',
					text: 'Dữ liệu của bạn luôn được bảo vệ',
				},
				{
					id: 'trust-badge-3',
					icon: 'users',
					headline: 'Được Khách Hàng Tin Tưởng',
					text: 'Trên nhiều ngành nghề và lĩnh vực',
				},
			],
			statistics: {
				subheading: 'Số Liệu Bạn Có Thể Tin Cậy.',
				heading: 'Kết Quả Nói Lên Tất Cả.',
				description: `Chúng tôi không chỉ là kế toán. Chúng tôi là đối tác của bạn trong việc xây dựng một tương lai mạnh mẽ hơn, có lợi nhuận hơn.`,
				stats: [
					{
						id: 'stat-1',
						icon: 'users',
						sign: '',
						value: 99,
						unit: '%',
						label: 'Khách Hàng Hài Lòng',
					},
					{
						id: 'stat-2',
						icon: 'check',
						sign: '',
						value: 100,
						unit: '+',
						label: 'Dự Án Hoàn Thành',
					},
					{
						id: 'stat-3',
						icon: 'sack-dollar',
						sign: '$',
						value: 100,
						unit: 'K+',
						label: 'Tiết Kiệm Thuế Cho Khách Hàng',
					},
					{
						id: 'stat-4',
						icon: 'badge',
						sign: '',
						value: 7,
						unit: '+',
						label: 'Năm Kinh Nghiệm',
					},
				],
			},
			redirect: 'Khám Phá Dịch Vụ',
		},
		services: {
			subHeadline: 'CHUYÊN MÔN CỦA CHÚNG TÔI',
			title: 'Hơn Cả Việc Chuẩn Bị Thuế',
			description:
				'Chúng tôi điều phối tài chính cá nhân và doanh nghiệp của bạn nhằm phát hiện những khoản tiết kiệm mà người khác thường bỏ sót, đồng thời bảo vệ tài sản dài hạn của bạn.',
			services: [
				{
					id: 'service-1',
					image: FORMATION,
					label: 'Thành Lập',
					description: [
						'Xây dựng nền tảng vững chắc cho doanh nghiệp. Chúng tôi hỗ trợ chọn mô hình, đăng ký pháp lý và tối ưu hóa thuế—đảm bảo tính tuân thủ để bạn yên tâm tập trung tăng trưởng.',
					],
					includes: [
						'Tư vấn cấu trúc kinh doanh',
						'Nộp giấy tờ thành lập',
						'Đăng ký Mã Số Thuế (EIN)',
						'Đăng ký tiểu bang và địa phương',
						'Soạn thảo thỏa thuận hoạt động',
						'Hướng dẫn tuân thủ',
						'Lập kế hoạch thuế ban đầu',
						'Hỗ trợ giấy phép kinh doanh',
						'Dịch vụ đại lý đăng ký',
						'Lựa chọn gói thành lập',
					],
					problem:
						'Nhiều doanh nhân gặp khó khăn với các phức tạp của việc thành lập doanh nghiệp, dẫn đến những sai lầm tốn kém và bỏ lỡ cơ hội tiết kiệm thuế.',
					solution:
						'Dịch vụ thành lập của chúng tôi cung cấp hướng dẫn và hỗ trợ chuyên nghiệp để đảm bảo rằng doanh nghiệp của bạn được thiết lập đúng cách ngay từ đầu, tối ưu hóa lợi ích thuế và tránh các sai lầm tốn kém.',
				},
				{
					id: 'service-2',
					image: BOOKKEEPING,
					label: 'Kế Toán',
					description: [
						'Tài chính minh bạch. Quyết định chuẩn xác. Từ việc ghi chép giao dịch đến đối soát tài khoản, chúng tôi giữ cho sổ sách luôn hoàn hảo để bạn tập trung vào tầm nhìn chiến lược.',
					],
					includes: [
						'Ghi chép giao dịch',
						'Đối chiếu tài khoản',
						'Báo cáo tài chính',
						'Theo dõi chi phí',
						'Hỗ trợ chuẩn bị thuế',
						'Lựa chọn kế toán dựa trên đám mây',
						'Giải pháp kế toán tùy chỉnh',
						'Đánh giá tài chính định kỳ',
						'Dịch vụ đóng sổ cuối năm',
						'Lựa chọn gói kế toán',
					],
					problem:
						'Nhiều chủ doanh nghiệp nhỏ thấy kế toán tốn thời gian và khó hiểu, dẫn đến hồ sơ tài chính lộn xộn và các vấn đề tuân thủ tiềm ẩn.',
					solution:
						'Dịch vụ kế toán của chúng tôi cung cấp hồ sơ tài chính chính xác và tổ chức, giúp bạn có cái nhìn rõ ràng về sức khỏe tài chính của doanh nghiệp và đảm bảo tuân thủ các tiêu chuẩn kế toán.',
				},
				{
					id: 'service-3',
					image: PAYROLL,
					label: 'Bảng Lương',
					description: [
						'Trả lương chính xác, đúng hạn và tuân thủ tuyệt đối. Chúng tôi xử lý mọi tính toán, trích thuế và báo cáo chính phủ để bạn tập trung dẫn dắt đội ngũ.',
					],
					includes: [
						'Xử lý tiền lương',
						'Khấu trừ và nộp thuế',
						'Cổng thông tin tự phục vụ cho nhân viên',
						'Thiết lập chuyển khoản trực tiếp',
						'Tuân thủ thuế tiền lương',
						'Theo dõi thời gian và chấm công',
						'Báo cáo tiền lương',
						'Chuẩn bị W-2 và 1099 cuối năm',
						'Lựa chọn gói tiền lương',
					],
					problem:
						'Bảng lương có thể phức tạp và tốn thời gian, với các yêu cầu tuân thủ nghiêm ngặt có thể dẫn đến các khoản phạt đắt đỏ nếu không được xử lý đúng cách.',
					solution:
						'Dịch vụ bảng lương của chúng tôi đảm bảo rằng nhân viên của bạn được trả chính xác và đúng hạn, đồng thời duy trì tuân thủ các quy định về thuế, mang lại sự yên tâm và cho phép bạn tập trung vào phát triển doanh nghiệp.',
				},
				{
					id: 'service-4',
					image: TAXPREP,
					label: 'Chuẩn Bị Thuế',
					description: [
						'Khai thuế chuyên nghiệp, kết quả tối ưu. Từ các khoản khấu trừ phức tạp đến quy trình nộp thuế nhanh chóng, chúng tôi quản lý hồ sơ của bạn một cách chuyên nghiệp để đảm bảo lợi ích cao nhất.',
					],
					includes: [
						'Chuẩn bị tờ khai thuế',
						'Lập kế hoạch và chiến lược thuế',
						'Tối ưu hóa khấu trừ và tín dụng',
						'Nộp thuế với IRS và tiểu bang',
						'Đánh giá tuân thủ thuế',
						'Tổ chức tài liệu thuế',
						'Lời khuyên thuế quanh năm',
						'Lựa chọn gói chuẩn bị thuế',
					],
					problem:
						'Nhiều cá nhân và chủ doanh nghiệp cảm thấy việc chuẩn bị thuế quá tải và khó hiểu, dẫn đến sai sót, bỏ lỡ các khoản khấu trừ và tiềm ẩn các vấn đề tuân thủ.',
					solution:
						'Dịch vụ chuẩn bị thuế của chúng tôi đảm bảo rằng tờ khai thuế của bạn chính xác, tuân thủ và tối ưu hóa để tiết kiệm tối đa, mang lại sự yên tâm và cho phép bạn tập trung vào doanh nghiệp và mục tiêu tài chính của mình.',
				},
				{
					id: 'service-5',
					image: REPRESENTATION,
					label: 'Đại Diện Trước IRS',
					description: [
						'Đừng đối mặt với IRS một mình. Đội ngũ của chúng tôi quản lý các phức tạp của các cuộc kiểm tra và đàm phán thay mặt bạn, cung cấp sự bảo vệ chuyên nghiệp mà bạn cần để giải quyết các vấn đề thuế với sự tự tin hoàn toàn.',
					],
					includes: [
						'Hỗ trợ kiểm tra thuế',
						'Kháng cáo và đàm phán',
						'Bảo vệ quyền lợi của bạn',
						'Lựa chọn gói đại diện IRS',
					],
					problem:
						'Đối phó với IRS có thể là một trải nghiệm đáng sợ và căng thẳng, với các quy định phức tạp và các hình phạt tiềm năng cho việc không tuân thủ.',
					solution:
						'Dịch vụ đại diện IRS của chúng tôi cung cấp hỗ trợ chuyên nghiệp và bảo vệ, giúp bạn điều hướng các cuộc kiểm tra, kháng cáo, và đàm phán để đạt được kết quả tốt nhất có thể cho tình huống thuế của bạn.',
				},
				{
					id: 'service-6',
					image: ADVISORY,
					label: 'Tư Vấn Thuế',
					description: [
						'Định hướng chiến lược thuế thông minh. Chúng tôi cung cấp tư vấn chuyên sâu để giúp bạn tối ưu hóa tình hình thuế của mình, từ lập kế hoạch thuế đến các chiến lược tiết kiệm thuế phức tạp.',
					],
					includes: [
						'Lập kế hoạch thuế cá nhân và doanh nghiệp',
						'Chiến lược tiết kiệm thuế nâng cao',
						'Tư vấn về các khoản khấu trừ và tín dụng thuế',
						'Đánh giá tuân thủ thuế',
						'Lời khuyên thuế theo tình huống cụ thể',
						'Lựa chọn gói tư vấn thuế',
					],
					problem:
						'Nhiều cá nhân và doanh nghiệp không tận dụng được các cơ hội tiết kiệm thuế do thiếu kiến thức hoặc hướng dẫn chuyên nghiệp.',
					solution:
						'Dịch vụ tư vấn thuế của chúng tôi cung cấp kiến thức chuyên sâu và hướng dẫn chiến lược để giúp bạn tối ưu hóa tình hình thuế của mình, giảm thiểu nghĩa vụ thuế và tăng cường lợi ích tài chính tổng thể.',
				},
			],
		},
		pricing: {
			subheadline: 'TÀI CHÍNH RÕ RÀNG, GIẢI PHÁP LINH HOẠT',
			title: 'Giá Cả Minh Bạch',
			description:
				'Dịch vụ chuyên nghiệp được thiết kế để phát triển cùng cá nhân và doanh nghiệp của bạn.',
			entitiesID: ['individual', 'business'],
			entities: ['cá nhân', 'doanh nghiệp'],
			individual_price: [
				{
					id: 'individual-1',
					subheadline: 'Cơ Bản',
					label: 'Dịch Vụ Cơ Bản',
					price: {
						currency: '$',
						amount: 200,
						unit: 'khai báo thuế',
					},
					description:
						'Dịch vụ chuẩn bị thuế cá nhân cơ bản cho các tình huống thuế đơn giản.',
					includes: [
						'1 tờ khai thuế cá nhân (1040)',
						'1 đơn W-2',
						'Khấu trừ thuế tiêu chuẩn',
					],
				},
				{
					id: 'individual-2',
					popular: true,
					subheadline: 'Tiêu Chuẩn',
					label: 'Dịch Vụ Tiêu Chuẩn',
					price: {
						currency: '$',
						amount: 350,
						unit: 'khai báo thuế',
					},
					description:
						'Dịch vụ chuẩn bị thuế cá nhân tiêu chuẩn cho các tình huống thuế phức tạp hơn, bao gồm khấu trừ chi tiết và các mẫu bổ sung.',
					includes: [
						'1 tờ khai thuế cá nhân (1040)',
						'1 đơn W-2',
						'Khấu trừ chi tiết',
						'Mẫu bổ sung',
					],
				},
				{
					id: 'individual-3',
					subheadline: 'Cao Cấp',
					label: 'Dịch Vụ Cao Cấp',
					price: {
						currency: '$',
						amount: 500,
						unit: 'khai báo thuế',
					},
					description:
						'Dịch vụ chuẩn bị thuế cá nhân toàn diện cho các tình huống thuế phức tạp, bao gồm nhiều nguồn thu nhập, đầu tư và khấu trừ rộng rãi.',
				},
			],
			business_price: [
				{
					id: 'business-1',
					subheadline: 'Cơ Bản',
					label: 'Dịch Vụ Cơ Bản',
					price: {
						currency: '$',
						amount: 500,
						unit: 'tháng',
					},
					description:
						'Dịch vụ kế toán doanh nghiệp cơ bản cho các doanh nghiệp nhỏ với nhu cầu kế toán đơn giản.',
					includes: [
						'Ghi chép giao dịch',
						'Báo cáo tài chính hàng tháng',
						'Đối chiếu tài khoản hàng quý',
						'Hỗ trợ chuẩn bị thuế hàng năm',
					],
				},
				{
					id: 'business-2',
					popular: true,
					subheadline: 'Tiêu Chuẩn',
					label: 'Dịch Vụ Tiêu Chuẩn',
					price: {
						currency: '$',
						amount: 1000,
						unit: 'tháng',
					},
					description:
						'Dịch vụ kế toán doanh nghiệp tiêu chuẩn cho các doanh nghiệp vừa với nhu cầu kế toán phức tạp hơn.',
					includes: [
						'Ghi chép giao dịch',
						'Báo cáo tài chính hàng tháng',
						'Đối chiếu tài khoản hàng tháng',
						'Hỗ trợ chuẩn bị thuế hàng năm',
						'Tư vấn tài chính định kỳ',
					],
				},
				{
					id: 'business-3',
					subheadline: 'Cao Cấp',
					label: 'Dịch Vụ Cao Cấp',
					price: {
						currency: '$',
						amount: 2000,
						unit: 'tháng',
					},
					description:
						'Dịch vụ kế toán doanh nghiệp toàn diện cho các doanh nghiệp vừa với nhu cầu kế toán phức tạp và hỗ trợ tài chính liên tục.',
					includes: [
						'Ghi chép giao dịch',
						'Báo cáo tài chính hàng tháng',
						'Đối chiếu tài khoản hàng tháng',
						'Hỗ trợ chuẩn bị thuế hàng năm',
						'Tư vấn tài chính định kỳ',
						'Hỗ trợ quản lý dòng tiền',
						'Phân tích lợi nhuận và chi phí',
					],
				},
			],
			additional_info: {
				question: 'Không chắc dịch vụ nào phù hợp với bạn?',
				cta: 'Nói Chuyện Với Cố Vấn Viên',
			},
		},
		about: {
			subheadline: 'NHỮNG NGƯỜI SÁNG LẬP',
			headlineOne: 'Kiến Trúc Sư Của',
			headlineTwo: 'Sự Minh Bạch Trong Tài Chính',
			ivy: {
				name: 'Ivy Truong',
				title: 'KIẾN TRÚC SƯ CHÍNH CỦA SỰ TĂNG TRƯỞNG',
				designation: 'CPA',
				description:
					'Chuyên gia về tối ưu hóa thuế và bảo vệ tài sản dài hạn. Ivy biến những quy định phức tạp thành những lộ trình rõ ràng, giúp doanh nghiệp phát triển mạnh mẽ.',
			},
			tony: {
				name: 'Tony Hoang',
				title: 'CỐ VẤN CHIẾN LƯỢC THUẾ',
				designation: 'EA',
				description:
					'Chuyên gia được IRS công nhận với kiến thức sâu rộng về giải quyết thuế. Tony xây dựng các chiến lược thuế chủ động để bảo vệ tài sản và thúc đẩy tăng trưởng doanh nghiệp một cách chính xác.',
			},
			slogan: 'IT CPA & Advisory, PLLC — Chính Xác Trong Mọi Con Số',
		},
		contact: {
			subheadline: 'LIÊN HỆ',
			headlineOne: 'Hãy nói chuyện về',
			headlineTwo: 'những con số',
			headlineDescription:
				'Sẵn sàng tối ưu hóa chiến lược thuế của bạn hoặc giải quyết một vấn đề IRS phức tạp? Chúng tôi chỉ cách một cuộc trò chuyện.',
			contactMethods: [
				{
					type: 'phone',
					label: 'Điện Thoại',
					value: '+1 (346) 475 - 5148',
				},
				{
					type: 'email',
					label: 'Email',
					value: 'info@itcpa-us.com',
				},
				{
					type: 'office',
					label: 'Văn Phòng',
					value: 'Missouri City, Texas',
				},
			],
			formSubheadline: 'GỬI TIN NHẮN',
			formHeadline: 'Chúng tôi phản hồi trong vòng 24 giờ.',
			formDescription:
				'Mọi yêu cầu đều được bảo mật tuyệt đối. Dù bạn là cá nhân hay doanh nghiệp, đội ngũ của chúng tôi luôn sẵn sàng mang đến sự rõ ràng.',
			formFields: [
				{
					id: 'fullName',
					label: 'Họ và Tên',
					type: 'text',
					placeholder: 'Họ và Tên',
				},
				{
					id: 'email',
					label: 'Email',
					type: 'email',
					placeholder: 'Email',
				},
				{
					id: 'message',
					label: 'Tin Nhắn',
					type: 'textarea',
					placeholder: 'Hãy cho chúng tôi biết tình huống của bạn...',
				},
			],
		},
		footer: {
			titles: ['DỊCH VỤ', 'ĐIỀU HƯỚNG', 'NGƯỜI SÁNG LẬP'],
			logoDescription:
				'Dịch vụ thuế và tư vấn ưu tiên sự chính xác dành cho cá nhân và doanh nghiệp tìm kiếm sự rõ ràng, bảo vệ và tăng trưởng.',

			services: [
				'Thành Lập',
				'Kế Toán',
				'Bảng Lương',
				'Chuẩn Bị Thuế',
				'Đại Diện Trước IRS',
				'Tư Vấn Thuế',
			],
			navigation: [
				{ label: 'Dịch Vụ', href: '#services' },
				{ label: 'Bảng Giá', href: '#pricing' },
				{ label: 'Về Chúng Tôi', href: '#about' },
				{ label: 'Liên Hệ', href: '#contact' },
				{ label: 'Trang Chủ', href: '/' },
			],
			principals: [
				{
					name: 'Ivy Truong, CPA',
					href: 'https://www.linkedin.com/in/ivytruong01//',
				},
				{
					name: 'Tony Hoang, EA',
					href: 'https://www.linkedin.com/in/tonytuanhoang/',
				},
			],
			copyright: {
				text: '© 2024 IT CPA & Advisory, PLLC. BẢN QUYỀN ĐÃ ĐƯỢC BẢO LƯU.',
				slogan: 'CHÍNH XÁC TRONG MỌI CON SỐ',
			},
		},
		privacyPolicy: {
			contentList: [
				{ label: 'Giới Thiệu', href: '#introduction' },
				{
					label: 'Thông Tin Chúng Tôi Thu Thập',
					href: '#information-collection',
				},
				{
					label: 'Cách Chúng Tôi Sử Dụng Thông Tin Của Bạn',
					href: '#how-we-use-information',
				},
				{ label: 'Thông Tin Khai Thuế', href: '#tax-return-information' },
				{
					label: 'Cách Chúng Tôi Chia Sẻ Thông Tin Của Bạn',
					href: '#how-we-share-information',
				},
				{ label: 'Không Bán Thông Tin', href: '#no-sale-of-information' },
				{
					label: 'Cookies và Công Nghệ Web Khác',
					href: '#cookies-and-other-web-technologies',
				},
				{ label: 'Bảo Mật Thông Tin', href: '#information-security' },
				{ label: 'Cổng Thông Tin Khách Hàng', href: '#customer-portal' },
				{
					label: 'Thư Điện Tử, Tin Nhắn, và Liên Lạc Khác',
					href: '#email-messages-and-other-communications',
				},
				{ label: 'Lưu Trữ Thông Tin', href: '#information-retention' },
				{
					label: 'Lựa Chọn và Quyền Của Bạn',
					href: '#your-choices-and-rights',
				},
				{ label: 'Quyền Riêng Tư Trẻ Em', href: '#children-s-privacy' },
				{
					label: 'Liên Kết Đến Các Trang Web Khác',
					href: '#links-to-other-websites',
				},
				{ label: 'Bảo Mật Nghề Nghiệp', href: '#professional-confidentiality' },
				{
					label: 'Tuân Thủ Pháp Luật và Bảo Vệ Quyền Lợi',
					href: '#legal-compliance-and-protection-of-rights',
				},
				{
					label: 'Thay Đổi Đối Với Chính Sách Quyền Riêng Tư Này',
					href: '#changes-to-this-privacy-policy',
				},
			],
			generalTitle: 'Chính Sách Bảo Mật',
			generalCompanyName: 'IT CPA & Advisory, PLLC',
			generalEffectiveDate: 'Ngày Hiệu Lực: 1 tháng 6, 2026',
			content: [
				{
					id: 'introduction',
					title: 'Giới Thiệu',
					subtitle: '',
					contentParagraphs: [
						`IT CPA & Advisory, PLLC (“Công Ty,” “chúng tôi,” “của chúng tôi,” hoặc “chúng ta”) tôn trọng quyền riêng tư của bạn. Chính Sách Quyền Riêng Tư này giải thích cách chúng tôi thu thập, sử dụng, tiết lộ, lưu trữ và bảo vệ thông tin khi bạn truy cập trang web của chúng tôi, liên hệ với chúng tôi, sử dụng cổng thông tin khách hàng, gửi thông tin cho chúng tôi, hoặc thuê chúng tôi cung cấp các dịch vụ về thuế, tư vấn, ghi sổ kế toán, thành lập doanh nghiệp, kế toán hoặc các dịch vụ chuyên môn liên quan.
Chính Sách Quyền Riêng Tư này áp dụng cho thông tin được thu thập thông qua trang web của chúng tôi và liên quan đến các dịch vụ của chúng tôi. Chính sách này không thay thế bất kỳ thư cam kết dịch vụ, thỏa thuận khách hàng, ủy quyền, sự đồng ý, tiết lộ thuế hoặc thỏa thuận bằng văn bản nào khác giữa bạn và Công Ty.
Nếu có bất kỳ điểm không nhất quán nào giữa phiên bản tiếng Anh và tiếng Việt của Chính Sách Quyền Riêng Tư này, phiên bản tiếng Anh sẽ được ưu tiên áp dụng trong phạm vi tối đa được pháp luật cho phép.`,
					],
					contentItems: [],
				},
				{
					id: 'information-collection',
					title: 'Thông Tin Chúng Tôi Thu Thập',
					subtitle: 'Nếu áp dụng',
					contentParagraphs: [],
					contentItems: [
						'Tên, địa chỉ gửi thư, địa chỉ email, số điện thoại và thông tin liên hệ',
						'Tên doanh nghiệp, loại hình pháp nhân, thông tin sở hữu, mã số thuế doanh nghiệp và hồ sơ doanh nghiệp',
						'Mã số định danh người nộp thuế, số an sinh xã hội, ngày sinh, thông tin người phụ thuộc và các thông tin khác liên quan đến thuế',
						'Hồ sơ tài chính, sao kê ngân hàng, hồ sơ kế toán, hồ sơ bảng lương, hóa đơn, biên lai, tài liệu thuế, tệp kế toán và tài liệu hỗ trợ',
						'Thông tin thành lập doanh nghiệp, thông tin đại lý đăng ký, chi tiết hồ sơ nộp và chi tiết quyền sở hữu',
						'Thông tin thanh toán, chi tiết lập hóa đơn và hồ sơ giao dịch',
						'Thông tin được gửi thông qua biểu mẫu trên trang web, email, cổng thông tin khách hàng, nền tảng đặt lịch hoặc các kênh liên lạc khác',
						'Bất kỳ thông tin nào khác mà bạn chọn cung cấp cho chúng tôi',
					],
					additions: [
						`Chúng tôi cũng có thể tự động thu thập một số thông tin kỹ thuật giới hạn khi bạn truy cập trang web của chúng tôi, chẳng hạn như địa chỉ IP, loại trình duyệt, thông tin thiết bị, các trang đã xem, trang web giới thiệu và thông tin sử dụng trang web nói chung.`,
					],
				},
				{
					id: 'how-we-use-information',
					title: 'Cách Chúng Tôi Sử Dụng Thông Tin',
					subtitle: 'Chúng tôi có thể sử dụng thông tin để:',
					contentParagraphs: [],
					contentItems: [
						`Cung cấp dịch vụ khai thuế, lập kế hoạch thuế, tư vấn, ghi sổ kế toán, kế toán, thành lập doanh nghiệp và các dịch vụ liên quan`,
						`Liên lạc với bạn về dịch vụ, cuộc hẹn, thời hạn, tài liệu, hóa đơn, thanh toán và thông tin cập nhật của công ty`,
						`Chuẩn bị, xem xét, nộp và hỗ trợ hồ sơ khai thuế, báo cáo, hồ sơ doanh nghiệp, hồ sơ kế toán và các tài liệu liên quan`,
						`Xác minh danh tính, ngăn chặn gian lận, bảo vệ tài khoản và duy trì an ninh`,
						`Vận hành, duy trì và cải thiện trang web, cổng thông tin khách hàng, hệ thống và dịch vụ của chúng tôi`,
						`Tuân thủ các nghĩa vụ pháp lý, thuế, quy định, chuyên môn và lưu trữ hồ sơ`,
						`Phản hồi các yêu cầu hợp pháp, kiểm toán, trát đòi hầu tòa, lệnh của tòa án hoặc yêu cầu của cơ quan chính phủ`,
						`Thực thi thỏa thuận, bảo vệ quyền lợi của chúng tôi và bảo vệ trước các khiếu nại`,
					],
					additions: [
						`Chúng tôi không bán thông tin khai thuế của bạn hoặc sử dụng thông tin đó cho hoạt động tiếp thị không liên quan nếu không có sự đồng ý bắt buộc.`,
					],
				},
				{
					id: 'tax-return-information',
					title: 'Thông Tin Khai Thuế',
					subtitle: '',
					contentParagraphs: [
						`Vì chúng tôi cung cấp các dịch vụ liên quan đến thuế, một số thông tin chúng tôi thu thập có thể được xem là thông tin khai thuế. Chúng tôi chỉ sử dụng và tiết lộ thông tin khai thuế khi được pháp luật hiện hành cho phép, theo ủy quyền của khách hàng, nghĩa vụ chuyên môn và phạm vi cam kết dịch vụ của chúng tôi với bạn.`,
						`Chúng tôi sẽ không cố ý sử dụng hoặc tiết lộ thông tin khai thuế cho các mục đích khác ngoài việc chuẩn bị, hỗ trợ hoặc cung cấp dịch vụ thuế và các dịch vụ liên quan, trừ khi được pháp luật cho phép hoặc được bạn ủy quyền theo cách thức mà các quy định hiện hành yêu cầu.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'how-we-share-information',
					title: 'Cách Chúng Tôi Chia Sẻ Thông Tin',
					subtitle:
						'Chúng tôi có thể chia sẻ thông tin khi hợp lý cần thiết cho các mục đích kinh doanh, chuyên môn, pháp lý, tuân thủ hoặc liên quan đến dịch vụ, bao gồm với:',
					contentParagraphs: [],
					contentItems: [
						`Cơ quan thuế, cơ quan chính phủ, tòa án và cơ quan quản lý khi được yêu cầu hoặc được pháp luật cho phép`,
						`Nhà cung cấp phần mềm thuế, nhà cung cấp phần mềm kế toán, nền tảng ghi sổ kế toán, nhà cung cấp bảng lương, nhà cung cấp dịch vụ nộp hồ sơ điện tử, nhà cung cấp cổng thông tin khách hàng và nhà cung cấp quản lý tài liệu`,
						`Nhà cung cấp dịch vụ lưu trữ đám mây, email, xử lý thanh toán, đặt lịch, công nghệ thông tin, an ninh mạng, hành chính và dịch vụ kinh doanh`,
						`Luật sư, công ty bảo hiểm, kiểm toán viên, tư vấn viên, chuyên gia tuân thủ và các cố vấn chuyên môn khác`,
						`Tổ chức tài chính hoặc bên thứ ba khác khi cần thiết để hoàn thành các dịch vụ bạn yêu cầu`,
						`Các pháp nhân kế nhiệm liên quan đến việc sáp nhập, bán, tái cấu trúc hoặc chuyển nhượng tài sản của công ty`,
						`Các bên khác khi có sự đồng ý của bạn hoặc theo chỉ dẫn của bạn`,
					],
					additions: [
						`Chúng tôi yêu cầu các nhà cung cấp dịch vụ chỉ sử dụng thông tin cho các mục đích được ủy quyền và duy trì các biện pháp bảo vệ phù hợp.`,
					],
				},
				{
					id: 'no-sale-of-information',
					title: 'Không Bán Thông Tin',
					subtitle: '',
					contentParagraphs: [
						`Chúng tôi không bán thông tin của bạn. Chúng tôi không bán thông tin khai thuế của bạn. Chúng tôi không sử dụng thông tin của bạn cho hoạt động tiếp thị không liên quan nếu không có sự đồng ý bắt buộc.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'cookies-and-other-web-technologies',
					title: 'Cookies và Công Nghệ Trang Web',
					subtitle: '',
					contentParagraphs: [
						`Chúng tôi có thể sử dụng cookies, web beacons, tracking pixels và các công nghệ tương tự để thu thập thông tin về tương tác của bạn với trang web và dịch vụ của chúng tôi. Thông tin này giúp chúng tôi phân tích xu hướng, quản trị trang web, theo dõi chuyển động của người dùng trên trang web và thu thập thông tin nhân khẩu học về tổng thể cơ sở người dùng của chúng tôi. Bạn có thể kiểm soát việc sử dụng cookies thông qua cài đặt trình duyệt của mình.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'information-security',
					title: 'Bảo Mật Thông Tin',
					subtitle: '',
					contentParagraphs: [
						`Chúng tôi sử dụng các biện pháp bảo vệ hợp lý về hành chính, kỹ thuật và vật lý được thiết kế để bảo vệ thông tin cá nhân, thông tin người nộp thuế và hồ sơ khách hàng khỏi việc truy cập, sử dụng, tiết lộ, thay đổi hoặc phá hủy trái phép.`,
						`Các biện pháp bảo vệ có thể bao gồm cổng thông tin khách hàng bảo mật, kiểm soát truy cập, bảo vệ bằng mật khẩu, mã hóa khi phù hợp, phương thức chuyển tệp bảo mật, bảo vệ chống phần mềm độc hại, đào tạo nhân viên, đánh giá nhà cung cấp, sao lưu và quy trình phản ứng sự cố.`,
						`Không có phương thức truyền tải hoặc lưu trữ nào hoàn toàn an toàn. Bạn nên tránh gửi thông tin nhạy cảm về thuế, tài chính hoặc danh tính qua email không được mã hóa trừ khi bạn hiểu và chấp nhận rủi ro.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'customer-portal',
					title: 'Cổng Thông Tin Khách Hàng và Nền Tảng Bên Thứ Ba',
					subtitle: '',
					contentParagraphs: [
						`Chúng tôi có thể sử dụng các nền tảng bên thứ ba để trao đổi tài liệu, lấy chữ ký, xử lý thanh toán, quản lý hồ sơ ghi sổ kế toán, chuẩn bị hồ sơ khai thuế, liên lạc với khách hàng và cung cấp dịch vụ. Việc bạn sử dụng các nền tảng đó cũng có thể chịu sự điều chỉnh bởi các điều khoản và chính sách quyền riêng tư riêng của nhà cung cấp nền tảng. Chúng tôi không chịu trách nhiệm về quyền riêng tư, bảo mật hoặc hoạt động của các trang web hoặc dịch vụ bên thứ ba mà chúng tôi không kiểm soát.`,
					],
				},
				{
					id: 'email-messages-and-other-communications',
					title: 'Email, SMS và Liên Lạc Điện Tử',
					subtitle: '',
					contentParagraphs: [
						`Bằng việc liên hệ với chúng tôi bằng phương thức điện tử, bạn đồng ý nhận liên lạc từ chúng tôi qua email, điện thoại, tin nhắn văn bản, cổng thông tin khách hàng hoặc các phương tiện điện tử khác, trừ khi bạn chọn không nhận trong trường hợp áp dụng. Vui lòng không gửi thông tin nhạy cảm qua email thông thường trừ khi bạn hiểu và chấp nhận các rủi ro. Chúng tôi có thể hướng dẫn bạn sử dụng cổng thông tin khách hàng bảo mật cho các tài liệu nhạy cảm.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'information-retention',
					title: 'Lưu Trữ Dữ Liệu',
					subtitle: '',
					contentParagraphs: [
						`Chúng tôi lưu giữ thông tin trong thời gian hợp lý cần thiết để cung cấp dịch vụ, tuân thủ các nghĩa vụ pháp lý và chuyên môn, duy trì hồ sơ kinh doanh, giải quyết tranh chấp, thực thi thỏa thuận và bảo vệ quyền lợi của chúng tôi. Thời hạn lưu giữ có thể khác nhau tùy thuộc vào loại thông tin, pháp luật hiện hành, tiêu chuẩn chuyên môn, yêu cầu nộp hồ sơ thuế và bản chất cam kết dịch vụ của chúng tôi với bạn.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'your-choices-and-rights',
					title: 'Lựa Chọn và Quyền Của Bạn',
					subtitle: '',
					contentParagraphs: [
						`Tùy thuộc vào địa điểm của bạn và pháp luật hiện hành, bạn có thể có quyền yêu cầu truy cập, chỉnh sửa, xóa hoặc hạn chế một số thông tin cá nhân nhất định. Một số yêu cầu có thể bị giới hạn bởi các nghĩa vụ pháp lý, thuế, quy định, chuyên môn, bảo mật hoặc lưu trữ hồ sơ. Để gửi yêu cầu về quyền riêng tư, hãy liên hệ với chúng tôi bằng thông tin bên dưới. Chúng tôi có thể cần xác minh danh tính của bạn trước khi phản hồi.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'children-s-privacy',
					title: 'Quyền Riêng Tư Trẻ Em',
					subtitle: '',
					contentParagraphs: [
						`Trang web và dịch vụ của chúng tôi dành cho người lớn và doanh nghiệp. Chúng tôi không cố ý thu thập thông tin cá nhân trực tiếp từ trẻ em dưới 13 tuổi thông qua trang web của chúng tôi. Nếu chúng tôi biết rằng mình đã thu thập thông tin như vậy mà không có sự đồng ý phù hợp, chúng tôi sẽ thực hiện các bước hợp lý để xóa thông tin đó.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'links-to-other-websites',
					title: 'Liên Kết Đến Các Trang Web Khác',
					subtitle: '',
					contentParagraphs: [
						`Trang web của chúng tôi có thể chứa liên kết đến các trang web của bên thứ ba. Chúng tôi không chịu trách nhiệm về quyền riêng tư, bảo mật, nội dung hoặc hoạt động của các trang web bên thứ ba. Bạn nên xem lại chính sách quyền riêng tư của bất kỳ trang web bên thứ ba nào mà bạn truy cập.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'professional-confidentiality',
					title: 'Bảo Mật Nghề Nghiệp',
					subtitle: '',
					contentParagraphs: [
						`Chúng tôi xem thông tin khách hàng là thông tin bảo mật và chỉ sử dụng thông tin đó khi phù hợp để cung cấp dịch vụ, tuân thủ pháp luật, duy trì hoạt động của công ty và bảo vệ quyền lợi của chúng tôi. Không nội dung nào trong Chính Sách Quyền Riêng Tư này giới hạn bất kỳ nghĩa vụ bảo mật nào mà chúng tôi phải tuân theo pháp luật hiện hành, tiêu chuẩn chuyên môn, quy định hoặc thỏa thuận bằng văn bản.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'legal-compliance-and-protection-of-rights',
					title: 'Tuân Thủ Pháp Luật và Bảo Vệ Quyền Lợi',
					subtitle:
						'Chúng tôi có thể sử dụng hoặc tiết lộ thông tin khi chúng tôi tin rằng điều đó là hợp lý cần thiết để:',
					contentParagraphs: [],
					contentItems: [
						`Tuân thủ pháp luật hiện hành, trát đòi hầu tòa, lệnh của tòa án, kiểm toán, yêu cầu của cơ quan thuế hoặc yêu cầu của cơ quan chính phủ`,
						`Bảo vệ quyền lợi, quyền riêng tư, sự an toàn, tài sản, khách hàng, nhân viên hoặc công chúng của chúng tôi`,
						`Phát hiện, ngăn chặn hoặc phản hồi gian lận, sự cố an ninh mạng, truy cập trái phép hoặc hoạt động bất hợp pháp`,
						`Thực thi thư cam kết dịch vụ, điều khoản, chính sách và thỏa thuận`,
						`Bảo vệ trước các khiếu nại hoặc thủ tục pháp lý`,
					],
				},
				{
					id: 'changes-to-this-privacy-policy',
					title: 'Thay Đổi Đối Với Chính Sách Quyền Riêng Tư Này',
					subtitle: '',
					contentParagraphs: [
						`Chúng tôi có thể cập nhật Chính Sách Quyền Riêng Tư này theo thời gian. Phiên bản cập nhật sẽ được đăng trên trang web của chúng tôi cùng với ngày có hiệu lực đã được sửa đổi. Việc tiếp tục sử dụng trang web hoặc dịch vụ của chúng tôi sau khi các thay đổi được đăng có nghĩa là bạn thừa nhận Chính Sách Quyền Riêng Tư đã được cập nhật.`,
					],
					contentItems: [],
					additions: [],
				},
			],
			contact: {
				email: `info@itcpa-us.com`,
				phone: `+1 (346) 475 - 5148`,
				website: `itcpa-us.com`,
			},
		},
		termAndConditions: {
			contentList: [
				{ label: 'Đồng Ý Với Điều Khoản', href: '#agreement-to-terms' },
				{
					label: 'Chỉ Sử Dụng Trang Web; Cần Hợp Đồng Dịch Vụ Riêng',
					href: '#website-use-only-separate-engagement-required',
				},
				{ label: 'Dịch Vụ', href: '#services' },
				{
					label: 'Không Phải Tư Vấn Qua Trang Web',
					href: '#no-advice-through-website',
				},
				{
					label: 'Trách Nhiệm Của Khách Hàng',
					href: '#client-responsibilities',
				},
				{
					label: 'Thời Hạn và Nộp Tài Liệu',
					href: '#deadlines-and-document-submission',
				},
				{ label: 'Điều Khoản Thanh Toán', href: '#payment-terms' },
				{
					label: 'Hoàn Tiền và Hủy Dịch Vụ',
					href: '#refunds-and-cancellations',
				},
				{
					label: 'Liên Lạc Điện Tử và Sự Đồng Ý',
					href: '#electronic-communications-and-consent',
				},
				{
					label: 'Cổng Thông Tin Khách Hàng và Bảo Mật Tài Khoản',
					href: '#client-portals-passwords-and-account-security',
				},
				{ label: 'Thông Tin Nhạy Cảm', href: '#sensitive-information' },
				{
					label: 'Thông Tin Khai Thuế và Bảo Mật',
					href: '#tax-return-information-and-confidentiality',
				},
				{ label: 'Dịch Vụ Bên Thứ Ba', href: '#third-party-services' },
				{ label: 'Không Bảo Đảm Kết Quả', href: '#no-guarantee-of-results' },
				{
					label: 'Nội Dung Trang Web và Sở Hữu Trí Tuệ',
					href: '#website-content-and-intellectual-property',
				},
				{ label: 'Hành Vi Bị Cấm', href: '#prohibited-uses' },
				{ label: 'Quyền Riêng Tư', href: '#privacy' },
				{
					label: 'Tuyên Bố Miễn Trừ Bảo Đảm',
					href: '#disclaimer-of-warranties',
				},
				{ label: 'Giới Hạn Trách Nhiệm', href: '#limitation-of-liability' },
				{ label: 'Bồi Thường', href: '#indemnification' },
				{ label: 'Sự Kiện Bất Khả Kháng', href: '#force-majeure' },
				{
					label: 'Chấm Dứt hoặc Hạn Chế Quyền Truy Cập',
					href: '#termination-or-restriction-of-access',
				},
				{
					label: 'Luật Điều Chỉnh và Địa Điểm Giải Quyết Tranh Chấp',
					href: '#governing-law-and-venue',
				},
				{ label: 'Tùy Chọn Trọng Tài', href: '#arbitration-option' },
				{ label: 'Từ Bỏ Kiện Tập Thể', href: '#class-action-waiver' },
				{ label: 'Tính Riêng Biệt Của Điều Khoản', href: '#severability' },
				{ label: 'Không Từ Bỏ Quyền', href: '#no-waiver' },
				{
					label: 'Toàn Bộ Thỏa Thuận Đối Với Việc Sử Dụng Trang Web',
					href: '#entire-agreement-for-website-use',
				},
				{ label: 'Thay Đổi Điều Khoản', href: '#changes-to-terms' },
			],
			generalTitle: 'Điều Khoản và Điều Kiện',
			generalCompanyName: 'IT CPA & Advisory, PLLC',
			generalEffectiveDate: 'Ngày Hiệu Lực: 1 tháng 6, 2026',
			content: [
				{
					id: 'agreement-to-terms',
					title: 'Đồng Ý Với Điều Khoản',
					subtitle: '',
					contentParagraphs: [
						`Các Điều Khoản và Điều Kiện này (“Điều Khoản”) điều chỉnh việc bạn truy cập và sử dụng trang web, biểu mẫu trực tuyến, công cụ đặt lịch, liên kết thanh toán, cổng thông tin khách hàng, tài liệu, nội dung và các dịch vụ trực tuyến liên quan do IT CPA & Advisory, PLLC (“Công Ty,” “chúng tôi,” “của chúng tôi,” hoặc “chúng ta”) cung cấp.`,
						`Bằng việc truy cập hoặc sử dụng trang web hoặc dịch vụ trực tuyến của chúng tôi, bạn đồng ý bị ràng buộc bởi các Điều Khoản này, Chính Sách Quyền Riêng Tư, Tuyên Bố Miễn Trừ Trách Nhiệm Trang Web và bất kỳ thư cam kết dịch vụ hoặc thỏa thuận bằng văn bản nào áp dụng. Nếu bạn không đồng ý với các Điều Khoản này, bạn không nên sử dụng trang web hoặc dịch vụ trực tuyến của chúng tôi.`,
						`Nếu có bất kỳ điểm không nhất quán nào giữa phiên bản tiếng Anh và tiếng Việt của các Điều Khoản này, phiên bản tiếng Anh sẽ được ưu tiên áp dụng trong phạm vi tối đa được pháp luật cho phép.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'website-use-only-separate-engagement-required',
					title: 'Chỉ Sử Dụng Trang Web; Cần Hợp Đồng Dịch Vụ Riêng',
					subtitle: '',
					contentParagraphs: [
						`Trang web được cung cấp chỉ nhằm mục đích thông tin chung, hành chính và liên lạc. Việc sử dụng trang web không tạo ra quan hệ CPA-khách hàng, kế toán-khách hàng, người khai thuế-khách hàng, tư vấn-khách hàng, quan hệ ủy thác hoặc bất kỳ quan hệ chuyên môn nào khác.`,
						`Dịch vụ chuyên môn chỉ được cung cấp sau khi Công Ty chấp nhận bạn là khách hàng thông qua thư cam kết dịch vụ bằng văn bản, thỏa thuận bằng văn bản, đề xuất đã ký, hóa đơn đã chấp nhận hoặc văn bản ủy quyền khác được Công Ty phê duyệt.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'services',
					title: 'Dịch Vụ',
					subtitle: '',
					contentParagraphs: [
						`Công Ty có thể cung cấp dịch vụ thuế, tư vấn, ghi sổ kế toán, kế toán, thành lập doanh nghiệp và các dịch vụ chuyên môn liên quan. Mô tả dịch vụ trên trang web mang tính tổng quát và không bảo đảm rằng bất kỳ dịch vụ cụ thể nào sẽ có sẵn, phù hợp hoặc thích hợp với tình huống cụ thể của bạn.`,
						`Chúng tôi có quyền chấp nhận, từ chối, giới hạn, tạm ngừng hoặc chấm dứt bất kỳ hợp đồng dịch vụ hoặc dịch vụ nào, tùy thuộc vào pháp luật áp dụng, tiêu chuẩn chuyên môn, nghĩa vụ đạo đức nghề nghiệp và thỏa thuận bằng văn bản.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'no-advice-through-website',
					title: 'Không Phải Tư Vấn Qua Trang Web',
					subtitle: '',
					contentParagraphs: [
						`Thông tin trên trang web chỉ được cung cấp cho mục đích thông tin chung và không phải là tư vấn pháp lý, thuế, kế toán, tài chính, đầu tư, kinh doanh hoặc tư vấn chuyên môn.`,
						`Bạn không nên hành động hoặc không hành động dựa trên nội dung trang web nếu chưa tham khảo ý kiến chuyên gia đủ điều kiện đã xem xét các sự kiện và hoàn cảnh cụ thể của bạn.`,
						`Mặc dù Công Ty có thể hỗ trợ hồ sơ thành lập doanh nghiệp và các vấn đề thuế hoặc kế toán liên quan, Công Ty không phải là công ty luật và không cung cấp tư vấn pháp lý, trừ khi được nêu rõ trong thỏa thuận bằng văn bản và được pháp luật áp dụng cho phép.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'client-responsibilities',
					title: 'Trách Nhiệm Của Khách Hàng',
					subtitle:
						'Bạn đồng ý cung cấp thông tin, hồ sơ, tài liệu, giải thích và ủy quyền chính xác, đầy đủ, cập nhật và kịp thời theo yêu cầu của Công Ty. Bạn chịu trách nhiệm:',
					contentParagraphs: [],
					contentItems: [
						`Xem xét tất cả hồ sơ khai thuế, biểu mẫu, báo cáo tài chính, báo cáo ghi sổ, hồ sơ nộp, đơn đăng ký và các sản phẩm bàn giao khác trước khi ký, phê duyệt, nộp hoặc sử dụng`,
						`Cung cấp tài liệu đủ sớm trước các thời hạn áp dụng`,
						`Thông báo cho chúng tôi về thay đổi trong thông tin liên hệ, hoạt động kinh doanh, quyền sở hữu, thu nhập, khoản khấu trừ, lương, tình trạng thuế hoặc các sự kiện liên quan khác`,
						`Lưu giữ bản sao hồ sơ của mình`,
						`Thanh toán tất cả hóa đơn và phí khi đến hạn`,
						`Tuân thủ các nghĩa vụ về thuế, kế toán, kinh doanh, doanh nghiệp, giấy phép, lao động, lương và pháp lý áp dụng`,
					],
					additions: [
						`Chúng tôi có thể dựa vào thông tin bạn cung cấp mà không cần xác minh độc lập, trừ khi có thỏa thuận bằng văn bản khác.`,
					],
				},
				{
					id: 'deadlines-and-document-submission',
					title: 'Thời Hạn và Nộp Tài Liệu',
					subtitle:
						'Bạn chịu trách nhiệm nộp tất cả thông tin, tài liệu, phê duyệt và thanh toán đủ sớm trước bất kỳ thời hạn nộp hồ sơ hoặc dịch vụ nào. Công Ty không chịu trách nhiệm đối với thời hạn bị bỏ lỡ, tiền phạt, tiền lãi, hồ sơ bị từ chối, hồ sơ bị chậm, công việc chưa hoàn thành hoặc các hậu quả khác do:',
					contentParagraphs: [],
					contentItems: [
						`Thông tin từ bạn bị trễ, không đầy đủ, không chính xác hoặc không rõ ràng`,
						`Bạn không phản hồi, phê duyệt, ký, thanh toán hoặc cung cấp tài liệu đúng hạn`,
						`Sự chậm trễ hoặc lỗi của phần mềm, cổng thông tin, ngân hàng, hệ thống lương, cơ quan chính phủ hoặc hệ thống nộp hồ sơ điện tử của bên thứ ba`,
						`Sự chậm trễ trong quá trình xử lý của cơ quan chính phủ`,
						`Các sự kiện ngoài tầm kiểm soát hợp lý của chúng tôi`,
					],
					additions: [],
				},
				{
					id: 'payment-terms',
					title: 'Điều Khoản Thanh Toán',
					subtitle: '',
					contentParagraphs: [
						`Phí dịch vụ, tiền đặt cọc, lịch lập hóa đơn, thời hạn thanh toán, điều khoản hoàn tiền, điều khoản hủy dịch vụ và quyền thu hồi nợ được điều chỉnh bởi thư cam kết dịch vụ, hóa đơn, đề xuất, ủy quyền thanh toán hoặc thỏa thuận bằng văn bản áp dụng.`,
						`Trừ khi được nêu rõ bằng văn bản, giá, ước tính, mô tả dịch vụ hoặc ví dụ trên trang web không phải là báo giá ràng buộc và có thể thay đổi tùy theo mức độ phức tạp, sự kiện thực tế, thời hạn, phạm vi, thông tin còn thiếu hoặc công việc bổ sung cần thực hiện.`,
						`Bạn đồng ý thanh toán tất cả phí được ủy quyền, chi phí, phí trễ hạn, phí thanh toán bị trả lại, chi phí thu hồi nợ và phí luật sư hợp lý phát sinh trong việc thu hồi các khoản chưa thanh toán, trong phạm vi pháp luật và thỏa thuận áp dụng cho phép.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'refunds-and-cancellations',
					title: 'Hoàn Tiền và Hủy Dịch Vụ',
					subtitle: '',
					contentParagraphs: [
						`Việc hoàn tiền và hủy dịch vụ phụ thuộc vào thư cam kết dịch vụ, hóa đơn, đề xuất hoặc thỏa thuận bằng văn bản áp dụng.`,
						`Trừ khi có văn bản khác, phí đã thanh toán cho công việc đã hoàn thành, công việc đang thực hiện, tư vấn, xem xét tài liệu, chuẩn bị hồ sơ, dịch vụ tư vấn, dọn dẹp ghi sổ, công việc kế toán, công việc thành lập doanh nghiệp, xử lý hành chính và thời gian đã sử dụng sẽ không được hoàn lại.`,
						`Công Ty có thể ngừng công việc hoặc giữ lại sản phẩm công việc nếu hóa đơn chưa được thanh toán, tùy thuộc vào pháp luật áp dụng và nghĩa vụ chuyên môn.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'electronic-communications-and-consent',
					title: 'Liên Lạc Điện Tử và Sự Đồng Ý',
					subtitle: '',
					contentParagraphs: [
						`Bằng việc liên hệ với chúng tôi qua trang web, email, điện thoại, SMS/tin nhắn, biểu mẫu trực tuyến, nền tảng đặt lịch, cổng thông tin khách hàng hoặc phương thức điện tử khác, bạn đồng ý nhận liên lạc từ chúng tôi bằng phương tiện điện tử.`,
						`Liên lạc điện tử có thể bao gồm nhắc lịch hẹn, yêu cầu tài liệu, liên kết thanh toán, cập nhật dịch vụ, nhắc thời hạn, thông báo hành chính và các liên lạc liên quan đến dịch vụ khác.`,
						`Phí tiêu chuẩn của nhà mạng có thể áp dụng đối với SMS/tin nhắn. Bạn có thể chọn không nhận tin nhắn không thiết yếu trong trường hợp áp dụng, nhưng việc chọn không nhận có thể ảnh hưởng đến khả năng chúng tôi cung cấp dịch vụ kịp thời.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'client-portals-passwords-and-account-security',
					title: 'Cổng Thông Tin Khách Hàng và Bảo Mật Tài Khoản',
					subtitle: '',
					contentParagraphs: [
						`Nếu bạn sử dụng cổng thông tin khách hàng, nền tảng chia sẻ tệp, hệ thống kế toán, nền tảng lương, bộ xử lý thanh toán, cổng phần mềm thuế hoặc hệ thống bên thứ ba khác, bạn chịu trách nhiệm bảo mật tên đăng nhập, mật khẩu, xác thực đa yếu tố, thiết bị và quyền truy cập tài khoản của mình.`,
						`Bạn đồng ý thông báo ngay cho chúng tôi nếu nghi ngờ có truy cập trái phép, thông tin đăng nhập bị xâm phạm, hoạt động gian lận hoặc sự cố bảo mật liên quan đến tài khoản hoặc tài liệu của bạn.`,
						`Chúng tôi không chịu trách nhiệm đối với tổn thất do bạn không bảo vệ thông tin đăng nhập, tài khoản email, thiết bị hoặc hệ thống của mình.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'sensitive-information',
					title: 'Thông Tin Nhạy Cảm',
					subtitle: '',
					contentParagraphs: [
						`Bạn không nên gửi số An Sinh Xã Hội, tài liệu thuế, thông tin ngân hàng, hồ sơ lương, giấy tờ tùy thân hoặc thông tin nhạy cảm khác qua email không mã hóa hoặc kênh không an toàn, trừ khi bạn hiểu và chấp nhận rủi ro.`,
						`Chúng tôi có thể yêu cầu sử dụng cổng thông tin khách hàng bảo mật hoặc phương thức được phê duyệt khác để truyền tài liệu nhạy cảm.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'tax-return-information-and-confidentiality',
					title: 'Thông Tin Khai Thuế và Bảo Mật',
					subtitle: '',
					contentParagraphs: [
						`Thông tin khai thuế và thông tin khách hàng được xử lý theo pháp luật áp dụng, nghĩa vụ chuyên môn, thỏa thuận bằng văn bản và chính sách của Công Ty.`,
						`Chúng tôi sẽ không cố ý sử dụng hoặc tiết lộ thông tin khai thuế cho các mục đích không được pháp luật cho phép hoặc chưa được bạn cho phép khi cần thiết. Một số tiết lộ có thể được yêu cầu hoặc cho phép để chuẩn bị thuế, nộp hồ sơ điện tử, kế toán, ghi sổ, kiểm tra chất lượng, tuân thủ pháp luật, nghĩa vụ chuyên môn hoặc các dịch vụ bạn yêu cầu.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'third-party-services',
					title: 'Dịch Vụ Bên Thứ Ba',
					subtitle: '',
					contentParagraphs: [
						`Trang web hoặc dịch vụ của chúng tôi có thể liên quan đến trang web, phần mềm, cổng thông tin, bộ xử lý thanh toán, phần mềm thuế, nền tảng kế toán, nền tảng ghi sổ, hệ thống lương, công cụ chữ ký điện tử, nền tảng đặt lịch, nhà cung cấp lưu trữ đám mây, trang web chính phủ hoặc dịch vụ bên thứ ba khác.`,
						`Chúng tôi không kiểm soát và không chịu trách nhiệm đối với nội dung, khả năng hoạt động, điều khoản, chính sách quyền riêng tư, thực tiễn dữ liệu, bảo mật, lỗi, chậm trễ hoặc sự cố của bên thứ ba. Việc bạn sử dụng dịch vụ bên thứ ba có thể chịu sự điều chỉnh bởi các điều khoản và điều kiện riêng.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'no-guarantee-of-results',
					title: 'Không Bảo Đảm Kết Quả',
					subtitle: '',
					contentParagraphs: [
						`Công Ty không bảo đảm bất kỳ khoản hoàn thuế, tiết kiệm thuế, kết quả kiểm toán, sự chấp thuận của chính phủ, việc chấp nhận hồ sơ, kết quả thành lập doanh nghiệp, kết quả kế toán, kết quả tài chính, kết quả kinh doanh, kết quả khoản vay, kết quả tín dụng hoặc kết quả cụ thể nào khác.`,
						`Mọi mốc thời gian, ước tính, dự báo, tính toán hoặc kết quả dự kiến đều dựa trên thông tin hiện có và có thể thay đổi do sự kiện bổ sung, thay đổi pháp luật, quá trình xử lý của cơ quan, hành động của bên thứ ba hoặc các hoàn cảnh ngoài tầm kiểm soát của chúng tôi.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'website-content-and-intellectual-property',
					title: 'Nội Dung Trang Web và Sở Hữu Trí Tuệ',
					subtitle: '',
					contentParagraphs: [
						`Tất cả nội dung trang web, bao gồm văn bản, hình ảnh, biểu trưng, thiết kế, bài viết, danh sách kiểm tra, biểu mẫu, mẫu tài liệu, tài liệu tải xuống, video, hình ảnh và các tài liệu khác, thuộc sở hữu hoặc được cấp phép cho Công Ty và được bảo vệ bởi luật sở hữu trí tuệ.`,
						`Bạn có thể xem, tải xuống hoặc in tài liệu trên trang web cho mục đích cá nhân hoặc nội bộ doanh nghiệp. Bạn không được sao chép, tái sản xuất, sửa đổi, phân phối, bán, xuất bản, đăng tải, thu thập dữ liệu, đóng khung hoặc khai thác nội dung trang web nếu không có sự đồng ý trước bằng văn bản của chúng tôi.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'prohibited-uses',
					title: 'Hành Vi Bị Cấm',
					subtitle: 'Bạn đồng ý không:',
					contentParagraphs: [],
					contentItems: [
						`Sử dụng trang web cho mục đích bất hợp pháp, gian lận, gây hại hoặc không được phép`,
						`Gửi thông tin sai, gây hiểu lầm, không đầy đủ hoặc không được phép`,
						`Tải lên phần mềm độc hại, vi-rút, phần mềm gián điệp, mã độc tống tiền hoặc mã gây hại`,
						`Cố gắng truy cập trái phép vào trang web, cổng thông tin khách hàng, hệ thống, tài khoản hoặc dữ liệu`,
						`Can thiệp vào hoạt động, bảo mật hoặc khả năng hoạt động của trang web`,
						`Thu thập, sao chép, lấy hoặc sử dụng sai nội dung hoặc dữ liệu trang web`,
						`Mạo danh người hoặc tổ chức khác`,
						`Sử dụng trang web để quấy rối, đe dọa, phỉ báng hoặc gây hại cho người khác`,
						`Vi phạm quyền sở hữu trí tuệ, quyền riêng tư, quyền công khai hoặc các quyền khác`,
					],
					additions: [
						`Chúng tôi có thể hạn chế, tạm ngừng hoặc chấm dứt quyền truy cập vào trang web hoặc dịch vụ trực tuyến nếu bạn vi phạm các Điều Khoản này.`,
					],
				},
				{
					id: 'privacy',
					title: 'Quyền Riêng Tư',
					subtitle: '',
					contentParagraphs: [
						`Việc bạn sử dụng trang web cũng chịu sự điều chỉnh của Chính Sách Quyền Riêng Tư của chúng tôi, trong đó giải thích cách chúng tôi thu thập, sử dụng, tiết lộ, lưu giữ và bảo vệ thông tin.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'disclaimer-of-warranties',
					title: 'Tuyên Bố Miễn Trừ Bảo Đảm',
					subtitle: '',
					contentParagraphs: [
						`Trang web, dịch vụ trực tuyến và nội dung trang web được cung cấp “nguyên trạng” và “theo tình trạng sẵn có.” Trong phạm vi tối đa được pháp luật cho phép, Công Ty từ chối mọi bảo đảm, dù rõ ràng hay ngụ ý, bao gồm bảo đảm về độ chính xác, đầy đủ, độ tin cậy, khả năng thương mại, sự phù hợp cho một mục đích cụ thể, quyền sở hữu, không vi phạm, bảo mật, khả năng hoạt động và hoạt động không gián đoạn.`,
						`Chúng tôi không bảo đảm rằng trang web sẽ không có lỗi, an toàn, không có vi-rút, cập nhật, luôn có sẵn hoặc tương thích với hệ thống của bạn.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'limitation-of-liability',
					title: 'Giới Hạn Trách Nhiệm',
					subtitle:
						'Trong phạm vi tối đa được pháp luật cho phép, Công Ty và chủ sở hữu, thành viên, quản lý, nhân viên, nhà thầu, đại lý, đại diện, đơn vị kế thừa và đơn vị liên kết của Công Ty sẽ không chịu trách nhiệm đối với bất kỳ thiệt hại gián tiếp, ngẫu nhiên, hậu quả, đặc biệt, mẫu mực, trừng phạt, mất lợi nhuận, mất doanh thu, mất dữ liệu, gián đoạn kinh doanh hoặc thiệt hại tương tự nào phát sinh từ hoặc liên quan đến:',
					contentParagraphs: [],
					contentItems: [
						`Việc bạn sử dụng hoặc không thể sử dụng trang web`,
						`Việc bạn dựa vào nội dung trang web`,
						`Liên lạc điện tử`,
						`Trang web, phần mềm, cổng thông tin hoặc dịch vụ bên thứ ba`,
						`Truy cập trái phép do hệ thống, thiết bị, email, thông tin đăng nhập hoặc hành vi của bạn`,
						`Sự chậm trễ, lỗi, thiếu sót hoặc gián đoạn trong khả năng hoạt động của trang web`,
					],
					additions: [
						`Trong phạm vi tối đa được pháp luật cho phép, tổng trách nhiệm của Công Ty đối với các khiếu nại phát sinh từ hoặc liên quan đến việc sử dụng trang web sẽ không vượt quá một trăm đô la Mỹ ($100) hoặc số tiền bạn đã trả trực tiếp cho Công Ty riêng cho quyền truy cập trang web, tùy theo số nào lớn hơn.`,
						`Một số khu vực pháp lý không cho phép một số giới hạn trách nhiệm nhất định, vì vậy một số giới hạn có thể không áp dụng cho bạn.`,
					],
				},
				{
					id: 'indemnification',
					title: 'Bồi Thường',
					subtitle:
						'Bạn đồng ý bảo vệ, bồi thường và giữ cho Công Ty cùng chủ sở hữu, thành viên, quản lý, nhân viên, nhà thầu, đại lý, đại diện, đơn vị kế thừa và đơn vị liên kết không bị thiệt hại trước bất kỳ khiếu nại, thiệt hại, tổn thất, trách nhiệm, tiền phạt, chi phí và phí tổn nào, bao gồm phí luật sư hợp lý, phát sinh từ hoặc liên quan đến:',
					contentParagraphs: [],
					contentItems: [
						`Việc bạn sử dụng hoặc sử dụng sai trang web hoặc dịch vụ trực tuyến`,
						`Việc bạn vi phạm các Điều Khoản này`,
						`Việc bạn vi phạm pháp luật áp dụng`,
						`Thông tin, tài liệu hoặc nội dung bạn gửi cho chúng tôi`,
						`Sự bất cẩn, gian lận, hành vi sai trái hoặc hành động không được phép của bạn`,
						`Việc bạn vi phạm bất kỳ quyền nào của bên thứ ba`,
					],
					additions: [],
				},
				{
					id: 'force-majeure',
					title: 'Sự Kiện Bất Khả Kháng',
					subtitle: '',
					contentParagraphs: [
						`Công Ty không chịu trách nhiệm đối với sự chậm trễ hoặc không thực hiện do các sự kiện ngoài tầm kiểm soát hợp lý của chúng tôi, bao gồm thiên tai, sự kiện bất khả kháng, tranh chấp lao động, sự cố internet, sự cố tiện ích, tấn công mạng, hành động của chính phủ, chậm trễ của cơ quan, đại dịch, chiến tranh, khủng bố, bất ổn dân sự, sự cố nhà cung cấp, sự cố phần mềm hoặc các sự kiện khác ngoài tầm kiểm soát của chúng tôi.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'termination-or-restriction-of-access',
					title: 'Chấm Dứt hoặc Hạn Chế Quyền Truy Cập',
					subtitle: '',
					contentParagraphs: [
						`Chúng tôi có thể sửa đổi, tạm ngừng, hạn chế hoặc chấm dứt quyền truy cập vào trang web hoặc dịch vụ trực tuyến bất cứ lúc nào, có hoặc không có thông báo, vì bất kỳ lý do nào, bao gồm vi phạm các Điều Khoản này, nghi ngờ gian lận, quan ngại bảo mật, không thanh toán, sử dụng sai hoặc tuân thủ pháp luật.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'governing-law-and-venue',
					title: 'Luật Điều Chỉnh và Địa Điểm Giải Quyết Tranh Chấp',
					subtitle: '',
					contentParagraphs: [
						`Các Điều Khoản này được điều chỉnh bởi luật của Tiểu bang [Insert State], không xét đến nguyên tắc xung đột pháp luật.`,
						`Tùy thuộc vào bất kỳ thư cam kết dịch vụ, thỏa thuận bằng văn bản, điều khoản trọng tài hoặc yêu cầu pháp lý nào áp dụng, mọi tranh chấp phát sinh từ hoặc liên quan đến các Điều Khoản này, trang web hoặc dịch vụ trực tuyến sẽ được đưa ra độc quyền tại tòa án tiểu bang hoặc liên bang đặt tại [Insert County and State].`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'arbitration-option',
					title: 'Tùy Chọn Trọng Tài',
					subtitle: '',
					contentParagraphs: [
						`[Tùy chọn — Chỉ bao gồm nếu được luật sư phê duyệt.]`,
						`Trong phạm vi tối đa được pháp luật cho phép, mọi tranh chấp phát sinh từ hoặc liên quan đến các Điều Khoản này, trang web hoặc dịch vụ trực tuyến sẽ được giải quyết bằng trọng tài ràng buộc tại [Insert County and State] theo quy tắc của [Insert Arbitration Provider], ngoại trừ việc một trong hai bên có thể yêu cầu biện pháp khẩn cấp hoặc nộp đơn tại tòa án khiếu kiện nhỏ nếu được phép.`,
						`Bằng việc đồng ý với trọng tài, bạn và Công Ty từ bỏ quyền xét xử bởi bồi thẩm đoàn và quyền tham gia vụ kiện tập thể trong phạm vi tối đa được pháp luật cho phép.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'class-action-waiver',
					title: 'Từ Bỏ Kiện Tập Thể',
					subtitle: '',
					contentParagraphs: [
						`Trong phạm vi tối đa được pháp luật cho phép, bạn đồng ý rằng mọi khiếu nại chống lại Công Ty chỉ được đưa ra với tư cách cá nhân của bạn và không phải với tư cách nguyên đơn hoặc thành viên nhóm trong bất kỳ thủ tục kiện tập thể, tập hợp, hợp nhất hoặc đại diện nào.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'severability',
					title: 'Tính Riêng Biệt Của Điều Khoản',
					subtitle: '',
					contentParagraphs: [
						`Nếu bất kỳ điều khoản nào trong các Điều Khoản này bị coi là vô hiệu, bất hợp pháp hoặc không thể thực thi, các điều khoản còn lại vẫn giữ nguyên hiệu lực. Điều khoản vô hiệu sẽ được sửa đổi ở mức tối thiểu cần thiết để trở nên hợp lệ và có thể thực thi, nếu pháp luật cho phép.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'no-waiver',
					title: 'Không Từ Bỏ Quyền',
					subtitle: '',
					contentParagraphs: [
						`Việc chúng tôi không thực thi bất kỳ điều khoản nào trong các Điều Khoản này không được xem là từ bỏ quyền thực thi điều khoản đó hoặc bất kỳ điều khoản nào khác trong tương lai.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'entire-agreement-for-website-use',
					title: 'Toàn Bộ Thỏa Thuận Đối Với Việc Sử Dụng Trang Web',
					subtitle: '',
					contentParagraphs: [
						`Các Điều Khoản này, cùng với Chính Sách Quyền Riêng Tư và Tuyên Bố Miễn Trừ Trách Nhiệm Trang Web, tạo thành toàn bộ thỏa thuận giữa bạn và Công Ty về việc sử dụng trang web và dịch vụ trực tuyến.`,
						`Bất kỳ dịch vụ chuyên môn nào sẽ được điều chỉnh bởi thư cam kết dịch vụ, đề xuất, hóa đơn, ủy quyền thanh toán hoặc thỏa thuận bằng văn bản áp dụng. Nếu có xung đột giữa các Điều Khoản này và thỏa thuận dịch vụ bằng văn bản, thỏa thuận dịch vụ bằng văn bản sẽ kiểm soát đối với các dịch vụ chuyên môn được bao gồm trong thỏa thuận đó.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'changes-to-terms',
					title: 'Thay Đổi Điều Khoản',
					subtitle: '',
					contentParagraphs: [
						`Chúng tôi có thể cập nhật các Điều Khoản này bất cứ lúc nào bằng cách đăng phiên bản sửa đổi trên trang web. Các Điều Khoản sửa đổi có hiệu lực kể từ ngày đăng, trừ khi có quy định khác. Việc tiếp tục sử dụng trang web hoặc dịch vụ trực tuyến sau khi thay đổi được đăng có nghĩa là bạn chấp nhận các Điều Khoản đã sửa đổi.`,
					],
					contentItems: [],
					additions: [],
				},
			],
		},
		firmContact: {
			email: `info@itcpa-us.com`,
			phone: `+1 (346) 475 - 5148`,
			website: `itcpa-us.com`,
		},
	},
	en: {
		navbar: {
			home: 'Home',
			services: 'Services',
			pricing: 'Pricing',
			about: 'About Us',
			contact: 'Contact',
		},
		hero: {
			subheadline:
				'Trusted by Business Owners and Individuals. Forcused on Your Success.',
			title: {
				first: 'Clean Books',
				second: 'Confident Taxes',
				third: 'Smarter Growth',
			},
			subtitle:
				'IT CPA & Advisory, PLLC helps business owners and individuals stay compliant, maximize tax savings, and build a stronger financial foundation without the stress.',
			cta: 'Book a Consultation',
			trust_badges: [
				{
					id: 'trust-badge-1',
					icon: 'shield-check',
					headline: 'IRS Compliant',
					text: 'Stay audit-ready',
				},
				{
					id: 'trust-badge-2',
					icon: 'lock',
					headline: 'Data Security & Confidence',
					text: 'Your data is always protected',
				},
				{
					id: 'trust-badge-3',
					icon: 'users',
					headline: 'Trusted by Clients',
					text: 'Across industries and professions',
				},
			],
			statistics: {
				subheading: 'Numbers You Can Trust.',
				heading: 'Results That Speak for Themselves.',
				description: `We're more than accountants. We're your partners in building a stronger, more profitable future.`,
				stats: [
					{
						id: 'stat-1',
						icon: 'users',
						sign: '',
						value: 99,
						unit: '%',
						label: 'Satisfied Clients',
					},
					{
						id: 'stat-2',
						icon: 'check',
						sign: '',
						value: 100,
						unit: '+',
						label: 'Projects Completed',
					},
					{
						id: 'stat-3',
						icon: 'sack-dollar',
						sign: '$',
						value: 100,
						unit: 'K+',
						label: 'Tax Savings for Clients',
					},
					{
						id: 'stat-4',
						icon: 'badge',
						sign: '',
						value: 7,
						unit: '+',
						label: 'Years of Experience',
					},
				],
			},
			redirect: 'Explore Our Services',
		},
		services: {
			subHeadline: 'OUR EXPERTISE',
			title: 'More Than Just Tax Prep',
			description:
				'We align your personal and business finances to find the savings others miss and secure your long-term assets.',
			services: [
				{
					id: 'service-1',
					image: FORMATION,
					label: 'Formation',
					description: [
						'Build your business on a solid foundation. We handle entity selection, legal filings, and tax optimization—ensuring you stay compliant while you focus on growth.',
					],
					includes: [
						'Business structure consultation',
						'Filing of formation documents',
						'Employer Identification Number (EIN) application',
						'State and local registration',
						'Operating agreement drafting',
						'Compliance guidance',
						'Initial tax planning',
						'Business license assistance',
						'Registered agent services',
						'Formation package options',
					],
					problem:
						'Many entrepreneurs struggle with the complexities of business formation, leading to costly mistakes and missed opportunities for tax savings.',
					solution:
						'Our formation services provide expert guidance and support to ensure that your business is set up correctly from the start, maximizing tax benefits and minimizing risks.',
				},
				{
					id: 'service-2',
					image: BOOKKEEPING,
					label: 'Bookkeeping',
					description: [
						'Clear financials. Better decisions. From recording transactions to full account reconciliation, we keep your books immaculate so you can stay focused on the big picture.',
					],
					includes: [
						'Transaction recording',
						'Account reconciliation',
						'Financial reporting',
						'Expense tracking',
						'Tax preparation support',
						'Cloud-based bookkeeping options',
						'Customized bookkeeping solutions',
						'Regular financial reviews',
						'Year-end closing services',
						'Bookkeeping package options',
					],
					problem:
						'Many small business owners find bookkeeping to be time-consuming and confusing, leading to disorganized financial records and potential compliance issues.',
					solution:
						'Our bookkeeping services provide accurate and organized financial records, giving you a clear picture of your business’s financial health and ensuring compliance with accounting standards.',
				},
				{
					id: 'service-3',
					image: PAYROLL,
					label: 'Payroll',
					description: [
						'Accurate, on-time payroll with total compliance. We handle calculations, tax withholdings, and government reporting so you can focus on leading your team.',
					],
					includes: [
						'Payroll processing',
						'Tax withholding and filing',
						'Employee self-service portal',
						'Direct deposit setup',
						'Payroll tax compliance',
						'Time and attendance tracking',
						'Payroll reporting',
						'Year-end W-2 and 1099 preparation',
						'Payroll package options',
					],
					problem:
						'Payroll can be complex and time-consuming, with strict compliance requirements that can lead to costly penalties if not handled correctly.',
					solution:
						'Our payroll services ensure that your employees are paid accurately and on time, while also maintaining compliance with tax regulations, giving you peace of mind and allowing you to focus on growing your business.',
				},
				{
					id: 'service-4',
					image: TAXPREP,
					label: 'Preparation',
					description: [
						'Our tax preparation services ensure that your tax returns are accurate, compliant, and optimized for maximum savings.',
					],
					includes: [
						'Tax return preparation',
						'Tax planning and strategy',
						'Deduction and credit optimization',
						'IRS and state tax filing',
						'Tax compliance review',
						'Tax document organization',
						'Year-round tax advice',
						'Tax preparation package options',
					],
					problem:
						'Many individuals and business owners find tax preparation to be overwhelming and confusing, leading to errors, missed deductions, and potential compliance issues.',
					solution:
						'Our tax preparation services ensure that your tax returns are accurate, compliant, and optimized for maximum savings, giving you peace of mind and allowing you to focus on your business and financial goals.',
				},
				{
					id: 'service-5',
					image: REPRESENTATION,
					label: 'Representation',
					description: [
						'Don’t face the IRS alone. Our team manages the complexities of audits and negotiations on your behalf, providing the expert defense you need to resolve tax issues with total confidence.',
					],
					includes: [
						'IRS audit representation',
						'Tax dispute resolution',
						'Negotiation with IRS agents',
						'Tax penalty abatement',
						'Tax debt relief assistance',
						'Tax lien and levy support',
						'Tax compliance review',
						'IRS correspondence handling',
						'Tax resolution package options',
					],
					problem:
						'Dealing with the IRS can be intimidating and stressful, with complex regulations and potential penalties for non-compliance.',
					solution:
						'Our IRS representation services provide expert support and advocacy, helping you navigate audits, appeals, and negotiations to achieve the best possible outcome for your tax situation.',
				},
				{
					id: 'service-6',
					image: ADVISORY,
					label: 'Advisory',
					description: [
						'Smart tax strategy guidance. We provide in-depth advice to help you optimize your tax situation, from tax planning to complex tax-saving strategies.',
					],
					includes: [
						'Personal and business tax planning',
						'Advanced tax-saving strategies',
						'Advice on tax deductions and credits',
						'Tax compliance review',
						'Situational tax advice',
						'Tax advisory package options',
					],
					problem:
						'Many individuals and businesses miss out on tax-saving opportunities due to a lack of knowledge or professional guidance.',
					solution:
						'Our tax advisory services provide expert insights and strategic guidance to help you optimize your tax situation, minimize your tax liability, and enhance your overall financial benefits.',
				},
			],
		},
		pricing: {
			subheadline: 'FINANCIAL CLARITY, SCALED SOLUTIONS',
			title: 'Proven Transparency',
			description:
				'Professional services designed to evolve alongside your personal and business needs.',
			entitiesID: ['individual', 'business'],
			entities: ['individual', 'business'],
			individual_price: [
				{
					id: 'individual-1',
					subheadline: 'Basic',
					label: 'Basic Service',
					price: {
						currency: '$',
						amount: 200,
						unit: 'tax return',
					},
					description:
						'Basic individual tax preparation service for simple tax situations.',
					includes: [
						'1 individual tax return (1040)',
						'1 W-2 form',
						'Standard tax deduction',
					],
				},
				{
					id: 'individual-2',
					popular: true,
					subheadline: 'Standard',
					label: 'Standard Service',
					price: {
						currency: '$',
						amount: 350,
						unit: 'tax return',
					},
					description:
						'Standard individual tax preparation service for more complex tax situations, including itemized deductions and additional forms.',
					includes: [
						'1 individual tax return (1040)',
						'1 W-2 form',
						'Itemized deductions',
						'Additional forms as needed',
					],
				},
				{
					id: 'individual-3',
					subheadline: 'Premium',
					label: 'Premium Service',
					price: {
						currency: '$',
						amount: 500,
						unit: 'tax return',
					},
					description:
						'Comprehensive individual tax preparation service for complex tax situations, including multiple income sources, investments, and extensive deductions.',
					includes: [
						'1 individual tax return (1040)',
						'Multiple W-2 forms',
						'Itemized deductions',
						'Additional forms as needed',
					],
				},
			],
			business_price: [
				{
					id: 'business-1',
					subheadline: 'Basic',
					label: 'Basic Service',
					price: {
						currency: '$',
						amount: 500,
						unit: 'month',
					},
					description:
						'Basic business bookkeeping service for small businesses with simple accounting needs.',
					includes: [
						'Transaction recording',
						'Monthly financial reporting',
						'Quarterly account reconciliation',
						'Annual tax preparation support',
					],
				},
				{
					id: 'business-2',
					popular: true,
					subheadline: 'Standard',
					label: 'Standard Service',
					price: {
						currency: '$',
						amount: 1000,
						unit: 'month',
					},
					description:
						'Standard business bookkeeping service for medium-sized businesses with more complex accounting needs.',
					includes: [
						'Transaction recording',
						'Monthly financial reporting',
						'Monthly account reconciliation',
						'Annual tax preparation support',
						'Periodic financial consulting',
					],
				},
				{
					id: 'business-3',
					subheadline: 'Premium',
					label: 'Premium Service',
					price: {
						currency: '$',
						amount: 2000,
						unit: 'month',
					},
					description:
						'Comprehensive business bookkeeping service for large businesses with complex accounting needs.',
					includes: [
						'Transaction recording',
						'Monthly financial reporting',
						'Monthly account reconciliation',
						'Annual tax preparation support',
						'Periodic financial consulting',
						'Advanced financial analysis',
					],
				},
			],
			additional_info: {
				question: 'Not sure which service is right for you?',
				cta: 'Talk to an Advisor',
			},
		},
		about: {
			subheadline: 'THE PRINCIPALS',
			headlineOne: 'Architects of',
			headlineTwo: 'Fiscal Clarity',
			ivy: {
				title: 'PRINCIPAL ARCHITECT OF GROWTH',
				name: 'Ivy Truong',
				designation: 'CPA',
				description:
					'Specializing in the intersection of tax optimization and long-term wealth preservation. Ivy transforms complex regulatory landscapes into clear, actionable pathways for enterprise-level scaling.',
			},
			tony: {
				title: 'STRATEGIC TAX COUNSEL',
				name: 'Tony Hoang',
				designation: 'EA',
				description:
					'An IRS Enrolled Agent with deep expertise in federal and state tax resolution. Tony architects proactive tax strategies that protect assets and accelerate business growth with precision.',
			},
			slogan: 'IT CPA & Advisory, PLLC — Precision in Every Number',
		},
		contact: {
			subheadline: 'GET IN TOUCH',
			headlineOne: 'Let’s talk',
			headlineTwo: 'numbers',
			headlineDescription:
				"Ready to optimize your tax strategy or resolve a complex IRS matter? We're one conversation away.",
			contactMethods: [
				{
					type: 'phone',
					label: 'Phone',
					value: '+1 (346) 475 - 5148',
				},
				{
					type: 'email',
					label: 'Email',
					value: 'info@itcpa-us.com',
				},
				{
					type: 'office',
					label: 'Office',
					value: 'Missouri City, Texas',
				},
			],
			formSubheadline: 'SEND A MESSAGE',
			formHeadline: 'We respond within 24 hours.',
			formDescription:
				"All inquiries are treated with full confidentiality. Whether you're an individual or enterprise, our team is prepared to deliver clarity.",
			formFields: [
				{
					id: 'fullName',
					label: 'Full Name',
					type: 'text',
					placeholder: 'Full Name',
				},
				{
					id: 'email',
					label: 'Email',
					type: 'email',
					placeholder: 'Email',
				},
				{
					id: 'message',
					label: 'Message',
					type: 'textarea',
					placeholder: 'Let us know your situation...',
				},
			],
		},
		footer: {
			titles: ['SERVICES', 'NAVIGATION', 'PRINCIPALS'],
			logoDescription:
				'Precision-first tax and advisory services for individuals and enterprises seeking clarity, protection, and growth.',
			services: [
				'Formation',
				'Bookkeeping',
				'Payroll',
				'Tax Preparation',
				'IRS Representation',
				'Tax Advisory',
			],
			navigation: [
				{ label: 'Services', href: '#services' },
				{ label: 'Pricing', href: '#pricing' },
				{ label: 'About Us', href: '#about' },
				{ label: 'Contact', href: '#contact' },
				{ label: 'Home', href: '/' },
			],
			principals: [
				{
					name: 'Ivy Truong, CPA',
					href: 'https://www.linkedin.com/in/ivytruong01/',
				},
				{
					name: 'Tony Hoang, EA',
					href: 'https://www.linkedin.com/in/tonytuanhoang/',
				},
			],
			copyright: {
				text: `© ${new Date().getFullYear()} IT CPA & Advisory, PLLC. All rights reserved.`,
				slogan: 'PRECISION IN EVERY NUMBER',
			},
		},
		privacyPolicy: {
			contentList: [
				{ label: 'Introduction', href: '#introduction' },
				{
					label: 'Information We Collect',
					href: '#information-collection',
				},
				{
					label: 'How We Use Your Information',
					href: '#how-we-use-information',
				},
				{ label: 'Tax Return Information', href: '#tax-return-information' },
				{
					label: 'How We Share Your Information',
					href: '#how-we-share-information',
				},
				{ label: 'No Sale of Information', href: '#no-sale-of-information' },
				{
					label: 'Cookies and Other Web Technologies',
					href: '#cookies-and-other-web-technologies',
				},
				{ label: 'Information Security', href: '#information-security' },
				{ label: 'Customer Portal', href: '#customer-portal' },
				{
					label: 'Email, Text Messages, and Other Communications',
					href: '#email-messages-and-other-communications',
				},
				{ label: 'Information Retention', href: '#information-retention' },
				{
					label: 'Your Choices and Rights',
					href: '#your-choices-and-rights',
				},
				{ label: "Children's Privacy", href: '#children-s-privacy' },
				{
					label: 'Links to Other Websites',
					href: '#links-to-other-websites',
				},
				{
					label: 'Professional Confidentiality',
					href: '#professional-confidentiality',
				},
				{
					label: 'Legal Compliance and Protection of Rights',
					href: '#legal-compliance-and-protection-of-rights',
				},
				{
					label: 'Changes to This Privacy Policy',
					href: '#changes-to-this-privacy-policy',
				},
			],
			generalTitle: 'Privacy Policy',
			generalCompanyName: 'IT CPA & Advisory, PLLC',
			generalEffectiveDate: 'Effective Date: June 1, 2026',
			content: [
				{
					id: 'introduction',
					title: 'Introduction',
					subtitle: '',
					contentParagraphs: [
						`IT CPA & Advisory, PLLC (“Firm,” “we,” “our,” or “us”) respects your privacy. This Privacy Policy explains how we collect, use, disclose, store, and protect information when you visit our website, contact us, use our client portal, submit information to us, or engage us for tax, advisory, bookkeeping, business formation, accounting, or related professional services.
This Privacy Policy applies to information collected through our website and in connection with our services. It does not replace any engagement letter, client agreement, authorization, consent, tax disclosure, or other written agreement between you and the Firm.
If there is any inconsistency between the English and Vietnamese versions of this Privacy Policy, the English version controls to the fullest extent permitted by law.`,
					],
					contentItems: [],
				},
				{
					id: 'information-collection',
					title: 'Information We Collect',
					subtitle: 'If applicable',
					contentParagraphs: [],
					contentItems: [
						'Name, mailing address, email address, phone number, and contact information',
						'Business name, legal entity type, ownership information, business tax ID, and business records',
						'Taxpayer identification number, social security number, date of birth, dependent information, and other tax-related information',
						'Financial records, bank statements, accounting records, payroll records, invoices, receipts, tax documents, accounting files, and supporting documentation',
						'Business formation information, registered agent information, filing details, and ownership details',
						'Payment information, billing details, and transaction records',
						'Information submitted through website forms, email, client portal, scheduling platforms, or other communication channels',
						'Any other information you choose to provide to us',
					],
					additions: [
						`We may also automatically collect limited technical information when you visit our website, such as IP address, browser type, device information, pages viewed, referring website, and general website usage information.`,
					],
				},
				{
					id: 'how-we-use-information',
					title: 'How We Use Information',
					subtitle: 'We may use information to:',
					contentParagraphs: [],
					contentItems: [
						`Provide tax preparation, tax planning, advisory, bookkeeping, accounting, business formation, and related services`,
						`Communicate with you about services, appointments, deadlines, documents, invoices, payments, and firm updates`,
						`Prepare, review, file, and support tax returns, reports, business filings, accounting records, and related documents`,
						`Verify identity, prevent fraud, protect accounts, and maintain security`,
						`Operate, maintain, and improve our website, client portal, systems, and services`,
						`Comply with legal, tax, regulatory, professional, and recordkeeping obligations`,
						`Respond to lawful requests, audits, subpoenas, court orders, or government inquiries`,
						`Enforce agreements, protect our rights, and defend against claims`,
					],
					additions: [
						`We do not sell your tax return information or use it for unrelated marketing without required consent.`,
					],
				},
				{
					id: 'tax-return-information',
					title: 'Tax Return Information',
					subtitle: '',
					contentParagraphs: [
						`Because we provide tax-related services, some information we collect may be considered tax return information. We use and disclose tax return information only as permitted by applicable law, client authorization, professional obligations, and our engagement with you.`,
						`We will not knowingly use or disclose tax return information for purposes other than preparing, assisting with, or providing tax and related services unless permitted by law or authorized by you in the manner required by applicable rules.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'how-we-share-information',
					title: 'How We Share Information',
					subtitle:
						'We may share information as reasonably necessary for business, professional, legal, compliance, or service-related purposes, including with:',
					contentParagraphs: [],
					contentItems: [
						`Tax authorities, government agencies, courts, and regulators when required or permitted by law`,
						`Tax software providers, accounting software providers, bookkeeping platforms, payroll providers, e-filing providers, client portal providers, and document management providers`,
						`Cloud storage, email, payment processing, scheduling, IT, cybersecurity, administrative, and business service providers`,
						`Attorneys, insurers, auditors, consultants, compliance professionals, and other professional advisors`,
						`Financial institutions or other third parties when needed to complete services requested by you`,
						`Successor entities in connection with a merger, sale, restructuring, or transfer of firm assets`,
						`Other parties with your consent or at your direction`,
					],
					additions: [
						`We require service providers to use information only for authorized purposes and to maintain appropriate safeguards.`,
					],
				},
				{
					id: 'no-sale-of-information',
					title: 'No Sale of Information',
					subtitle: '',
					contentParagraphs: [
						`We do not sell your information. We do not sell your tax return information. We do not use your information for unrelated marketing without required consent.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'cookies-and-other-web-technologies',
					title: 'Cookies and Website Technology',
					subtitle: '',
					contentParagraphs: [
						`We may use cookies, web beacons, tracking pixels, and similar technologies to collect information about your interactions with our website and services. This information helps us analyze trends, administer the site, track users’ movements around the site, and gather demographic information about our user base as a whole. You can control the use of cookies through your browser settings.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'information-security',
					title: 'Information Security',
					subtitle: '',
					contentParagraphs: [
						`We use reasonable administrative, technical, and physical safeguards designed to protect personal information, taxpayer information, and client records from unauthorized access, use, disclosure, alteration, or destruction.`,
						`Safeguards may include secure client portals, access controls, password protections, encryption where appropriate, secure file transfer methods, malware protection, employee training, vendor review, backups, and incident response procedures.`,
						`No method of transmission or storage is completely secure. You should avoid sending sensitive tax, financial, or identity information through unencrypted email unless you understand and accept the risk.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'customer-portal',
					title: 'Client Portals and Third-Party Platforms',
					subtitle: '',
					contentParagraphs: [
						`We may use third-party platforms to exchange documents, obtain signatures, process payments, manage bookkeeping records, prepare tax returns, communicate with clients, and deliver services. Your use of those platforms may also be governed by the platform provider’s own terms and privacy policies. We are not responsible for the privacy, security, or practices of third-party websites or services that we do not control.`,
					],
				},
				{
					id: 'email-messages-and-other-communications',
					title: 'Email, SMS, and Electronic Communications',
					subtitle: '',
					contentParagraphs: [
						`By contacting us electronically, you consent to receive communications from us by email, phone, text message, client portal, or other electronic means, unless you opt out where applicable. Please do not send sensitive information by regular email unless you understand and accept the risks. We may direct you to use a secure client portal for sensitive documents.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'information-retention',
					title: 'Data Retention',
					subtitle: '',
					contentParagraphs: [
						`We retain information for as long as reasonably necessary to provide services, comply with legal and professional obligations, maintain business records, resolve disputes, enforce agreements, and protect our rights. Retention periods may vary depending on the type of information, applicable law, professional standards, tax filing requirements, and the nature of our engagement with you.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'your-choices-and-rights',
					title: 'Your Choices and Rights',
					subtitle: '',
					contentParagraphs: [
						`Depending on your location and applicable law, you may have rights to request access to, correction of, deletion of, or restriction of certain personal information. Some requests may be limited by legal, tax, regulatory, professional, security, or recordkeeping obligations. To submit a privacy request, contact us using the information below. We may need to verify your identity before responding.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'children-s-privacy',
					title: 'Children’s Privacy',
					subtitle: '',
					contentParagraphs: [
						`Our website and services are intended for adults and businesses. We do not knowingly collect personal information directly from children under 13 through our website. If we learn that we have collected such information without appropriate consent, we will take reasonable steps to delete it.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'links-to-other-websites',
					title: 'Links to Other Websites',
					subtitle: '',
					contentParagraphs: [
						`Our website may contain links to third-party websites. We are not responsible for the privacy, security, content, or practices of third-party websites. You should review the privacy policy of any third-party website you visit.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'professional-confidentiality',
					title: 'Professional Confidentiality',
					subtitle: '',
					contentParagraphs: [
						`We treat client information as confidential and use it only as appropriate to provide services, comply with law, maintain firm operations, and protect our rights. Nothing in this Privacy Policy limits any confidentiality obligations we owe under applicable law, professional standards, regulations, or written agreements.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'legal-compliance-and-protection-of-rights',
					title: 'Legal Compliance and Protection',
					subtitle:
						'We may use or disclose information when we believe it is reasonably necessary to:',
					contentParagraphs: [],
					contentItems: [
						`Comply with applicable law, subpoenas, court orders, audits, tax authority requests, or government inquiries`,
						`Protect our rights, privacy, safety, property, clients, employees, or the public`,
						`Detect, prevent, or respond to fraud, cybersecurity incidents, unauthorized access, or illegal activity`,
						`Enforce engagement letters, terms, policies, and agreements`,
						`Defend against claims or legal proceedings`,
					],
				},
				{
					id: 'changes-to-this-privacy-policy',
					title: 'Changes to This Privacy Policy',
					subtitle: '',
					contentParagraphs: [
						`We may update this Privacy Policy from time to time. The updated version will be posted on our website with a revised effective date. Continued use of our website or services after changes are posted means you acknowledge the updated Privacy Policy.`,
					],
					contentItems: [],
					additions: [],
				},
			],

			contact: {
				email: `info@itcpa-us.com`,
				phone: `+1 (346) 475 - 5148`,
				website: `itcpa-us.com`,
			},
		},
		termsAndConditions: {
			contentList: [
				{ label: 'Agreement to Terms', href: '#agreement-to-terms' },
				{
					label: 'Website Use Only; Separate Engagement Required',
					href: '#website-use-only-separate-engagement-required',
				},
				{ label: 'Services', href: '#services' },
				{
					label: 'No Advice Through Website',
					href: '#no-advice-through-website',
				},
				{ label: 'Client Responsibilities', href: '#client-responsibilities' },
				{
					label: 'Deadlines and Document Submission',
					href: '#deadlines-and-document-submission',
				},
				{ label: 'Payment Terms', href: '#payment-terms' },
				{
					label: 'Refunds and Cancellations',
					href: '#refunds-and-cancellations',
				},
				{
					label: 'Electronic Communications and Consent',
					href: '#electronic-communications-and-consent',
				},
				{
					label: 'Client Portals, Passwords, and Account Security',
					href: '#client-portals-passwords-and-account-security',
				},
				{ label: 'Sensitive Information', href: '#sensitive-information' },
				{
					label: 'Tax Return Information and Confidentiality',
					href: '#tax-return-information-and-confidentiality',
				},
				{ label: 'Third-Party Services', href: '#third-party-services' },
				{ label: 'No Guarantee of Results', href: '#no-guarantee-of-results' },
				{
					label: 'Website Content and Intellectual Property',
					href: '#website-content-and-intellectual-property',
				},
				{ label: 'Prohibited Uses', href: '#prohibited-uses' },
				{ label: 'Privacy', href: '#privacy' },
				{
					label: 'Disclaimer of Warranties',
					href: '#disclaimer-of-warranties',
				},
				{ label: 'Limitation of Liability', href: '#limitation-of-liability' },
				{ label: 'Indemnification', href: '#indemnification' },
				{ label: 'Force Majeure', href: '#force-majeure' },
				{
					label: 'Termination or Restriction of Access',
					href: '#termination-or-restriction-of-access',
				},
				{
					label: 'Governing Law and Venue',
					href: '#governing-law-and-venue',
				},
				{ label: 'Arbitration Option', href: '#arbitration-option' },
				{ label: 'Class Action Waiver', href: '#class-action-waiver' },
				{ label: 'Severability', href: '#severability' },
				{ label: 'No Waiver', href: '#no-waiver' },
				{
					label: 'Entire Agreement for Website Use',
					href: '#entire-agreement-for-website-use',
				},
				{ label: 'Changes to Terms', href: '#changes-to-terms' },
			],
			generalTitle: 'Terms and Conditions',
			generalCompanyName: 'IT CPA & Advisory, PLLC',
			generalEffectiveDate: 'Effective Date: June 1, 2026',
			content: [
				{
					id: 'agreement-to-terms',
					title: 'Agreement to Terms',
					subtitle: '',
					contentParagraphs: [
						`These Terms and Conditions (“Terms”) govern your access to and use of the website, online forms, scheduling tools, payment links, client portals, documents, materials, and related online services provided by IT CPA & Advisory, PLLC (“Firm,” “we,” “our,” or “us”).`,
						`By accessing or using our website or online services, you agree to be bound by these Terms, our Privacy Policy, our Website Disclaimer, and any applicable written engagement letter or agreement. If you do not agree with these Terms, you should not use our website or online services.`,
						`If there is any inconsistency between the English and Vietnamese versions of these Terms, the English version controls to the fullest extent permitted by law.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'website-use-only-separate-engagement-required',
					title: 'Website Use Only; Separate Engagement Required',
					subtitle: '',
					contentParagraphs: [
						`The website is provided for general informational, administrative, and communication purposes only. Use of the website does not create a CPA-client, accountant-client, tax preparer-client, advisor-client, fiduciary, or other professional relationship.`,
						`Professional services are provided only after the Firm accepts you as a client through a written engagement letter, written agreement, signed proposal, accepted invoice, or other written authorization approved by the Firm.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'services',
					title: 'Services',
					subtitle: '',
					contentParagraphs: [
						`The Firm may provide tax, advisory, bookkeeping, accounting, business formation, and related professional services. Website descriptions of services are general and do not guarantee that any particular service is available, suitable, or appropriate for your specific situation.`,
						`We reserve the right to accept, decline, limit, suspend, or terminate any engagement or service, subject to applicable law, professional standards, ethical obligations, and written agreements.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'no-advice-through-website',
					title: 'No Advice Through Website',
					subtitle: '',
					contentParagraphs: [
						`Information on the website is provided for general informational purposes only and is not legal, tax, accounting, financial, investment, business, or professional advice.`,
						`You should not act or refrain from acting based on website content without consulting a qualified professional who has reviewed your specific facts and circumstances.`,
						`Although the Firm may assist with business formation filings and related tax or accounting matters, the Firm is not a law firm and does not provide legal advice unless expressly stated in a written agreement and permitted by applicable law.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'client-responsibilities',
					title: 'Client Responsibilities',
					subtitle:
						'You agree to provide accurate, complete, current, and timely information, records, documents, explanations, and authorizations requested by the Firm. You are responsible for:',
					contentParagraphs: [],
					contentItems: [
						`Reviewing all returns, forms, financial reports, bookkeeping reports, filings, applications, and other deliverables before signing, approving, submitting, or using them`,
						`Providing documents sufficiently before applicable deadlines`,
						`Informing us of changes in your contact information, business operations, ownership, income, deductions, payroll, tax status, or other relevant facts`,
						`Maintaining copies of your records`,
						`Paying all invoices and fees when due`,
						`Complying with applicable tax, accounting, business, corporate, licensing, employment, payroll, and legal obligations`,
					],
					additions: [
						`We may rely on information you provide without independent verification unless otherwise agreed in writing.`,
					],
				},
				{
					id: 'deadlines-and-document-submission',
					title: 'Deadlines and Document Submission',
					subtitle:
						'You are responsible for submitting all information, documents, approvals, and payments sufficiently in advance of any filing or service deadline. The Firm is not responsible for missed deadlines, penalties, interest, rejected filings, delayed filings, incomplete work, or other consequences caused by:',
					contentParagraphs: [],
					contentItems: [
						`Late, incomplete, inaccurate, or unclear information from you`,
						`Your failure to respond, approve, sign, pay, or provide documents on time`,
						`Third-party software, portal, bank, payroll, government, or e-filing system delays or failures`,
						`Government agency processing delays`,
						`Events outside our reasonable control`,
					],
					additions: [],
				},
				{
					id: 'payment-terms',
					title: 'Payment Terms',
					subtitle: '',
					contentParagraphs: [
						`Fees, retainers, deposits, billing schedules, payment deadlines, refund terms, cancellation terms, and collection rights are governed by the applicable engagement letter, invoice, proposal, payment authorization, or written agreement.`,
						`Unless expressly stated in writing, website pricing, estimates, service descriptions, or examples are not binding quotes and may change based on complexity, facts, deadlines, scope, missing information, or additional work required.`,
						`You agree to pay all authorized fees, costs, late charges, returned-payment fees, collection costs, and reasonable attorney’s fees incurred in collecting unpaid amounts, to the extent permitted by law and applicable agreement.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'refunds-and-cancellations',
					title: 'Refunds and Cancellations',
					subtitle: '',
					contentParagraphs: [
						`Refunds and cancellations are subject to the applicable engagement letter, invoice, proposal, or written agreement.`,
						`Unless otherwise stated in writing, fees paid for completed work, work in progress, consultations, document review, filing preparation, advisory services, bookkeeping cleanup, accounting work, formation work, administrative processing, and time already incurred are non-refundable.`,
						`The Firm may stop work or withhold delivery of work product if invoices remain unpaid, subject to applicable law and professional obligations.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'electronic-communications-and-consent',
					title: 'Electronic Communications and Consent',
					subtitle: '',
					contentParagraphs: [
						`By contacting us through the website, email, phone, SMS/text message, online form, scheduling platform, client portal, or other electronic method, you consent to receive communications from us electronically.`,
						`Electronic communications may include appointment reminders, document requests, payment links, service updates, deadline reminders, administrative notices, and other service-related communications.`,
						`Standard carrier rates may apply for SMS/text messages. You may opt out of non-essential text messages where applicable, but opting out may affect our ability to provide timely service.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'client-portals-passwords-and-account-security',
					title: 'Client Portals, Passwords, and Account Security',
					subtitle: '',
					contentParagraphs: [
						`If you use a client portal, file-sharing platform, accounting system, payroll platform, payment processor, tax software portal, or other third-party system, you are responsible for maintaining the confidentiality of your username, password, multi-factor authentication, devices, and account access.`,
						`You agree to notify us immediately if you suspect unauthorized access, compromised credentials, fraudulent activity, or a security incident involving your account or documents.`,
						`We are not responsible for losses caused by your failure to protect your credentials, email account, devices, or systems.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'sensitive-information',
					title: 'Sensitive Information',
					subtitle: '',
					contentParagraphs: [
						`You should not send Social Security numbers, tax documents, bank information, payroll records, identity documents, or other sensitive information through unencrypted email or unsecured channels unless you understand and accept the risks.`,
						`We may require use of a secure client portal or other approved method for transmitting sensitive documents.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'tax-return-information-and-confidentiality',
					title: 'Tax Return Information and Confidentiality',
					subtitle: '',
					contentParagraphs: [
						`Tax return information and client information are handled according to applicable law, professional obligations, written agreements, and Firm policies.`,
						`We will not knowingly use or disclose tax return information for purposes not permitted by law or not authorized by you where required. Certain disclosures may be required or permitted for tax preparation, e-filing, accounting, bookkeeping, quality review, legal compliance, professional obligations, or services requested by you.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'third-party-services',
					title: 'Third-Party Services',
					subtitle: '',
					contentParagraphs: [
						`Our website or services may involve third-party websites, software, portals, payment processors, tax software, accounting platforms, bookkeeping platforms, payroll systems, e-signature tools, scheduling platforms, cloud storage providers, government websites, or other third-party services.`,
						`We do not control and are not responsible for third-party content, availability, terms, privacy policies, data practices, security, errors, delays, or failures. Your use of third-party services may be subject to separate terms and conditions.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'no-guarantee-of-results',
					title: 'No Guarantee of Results',
					subtitle: '',
					contentParagraphs: [
						`The Firm does not guarantee any specific tax refund, tax savings, audit result, government approval, filing acceptance, entity formation outcome, accounting result, financial result, business result, loan result, credit result, or other outcome.`,
						`Any timelines, estimates, projections, calculations, or expected outcomes are based on available information and may change due to additional facts, law changes, agency processing, third-party actions, or circumstances outside our control.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'website-content-and-intellectual-property',
					title: 'Website Content and Intellectual Property',
					subtitle: '',
					contentParagraphs: [
						`All website content, including text, graphics, logos, designs, articles, checklists, forms, templates, downloads, videos, images, and other materials, is owned by or licensed to the Firm and protected by intellectual property laws.`,
						`You may view, download, or print website materials for personal or internal business use only. You may not copy, reproduce, modify, distribute, sell, publish, post, scrape, frame, or exploit website content without our prior written consent.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'prohibited-uses',
					title: 'Prohibited Uses',
					subtitle: 'You agree not to:',
					contentParagraphs: [],
					contentItems: [
						`Use the website for unlawful, fraudulent, harmful, or unauthorized purposes`,
						`Submit false, misleading, incomplete, or unauthorized information`,
						`Upload malware, viruses, spyware, ransomware, or harmful code`,
						`Attempt to gain unauthorized access to the website, client portals, systems, accounts, or data`,
						`Interfere with website operation, security, or availability`,
						`Scrape, copy, harvest, or misuse website content or data`,
						`Impersonate another person or entity`,
						`Use the website to harass, threaten, defame, or harm others`,
						`Violate intellectual property, privacy, publicity, or other rights`,
					],
					additions: [
						`We may restrict, suspend, or terminate access to the website or online services for any violation of these Terms.`,
					],
				},
				{
					id: 'privacy',
					title: 'Privacy',
					subtitle: '',
					contentParagraphs: [
						`Your use of the website is also governed by our Privacy Policy, which explains how we collect, use, disclose, retain, and protect information.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'disclaimer-of-warranties',
					title: 'Disclaimer of Warranties',
					subtitle: '',
					contentParagraphs: [
						`The website, online services, and website content are provided “as is” and “as available.” To the fullest extent permitted by law, the Firm disclaims all warranties, express or implied, including warranties of accuracy, completeness, reliability, merchantability, fitness for a particular purpose, title, non-infringement, security, availability, and uninterrupted operation.`,
						`We do not guarantee that the website will be error-free, secure, virus-free, current, available, or compatible with your systems.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'limitation-of-liability',
					title: 'Limitation of Liability',
					subtitle:
						'To the fullest extent permitted by law, the Firm and its owners, members, managers, employees, contractors, agents, representatives, successors, and affiliates shall not be liable for any indirect, incidental, consequential, special, exemplary, punitive, lost-profit, lost-revenue, lost-data, business-interruption, or similar damages arising from or related to:',
					contentParagraphs: [],
					contentItems: [
						`Your use of or inability to use the website`,
						`Your reliance on website content`,
						`Electronic communications`,
						`Third-party websites, software, portals, or services`,
						`Unauthorized access caused by your systems, devices, email, credentials, or conduct`,
						`Delays, errors, omissions, or interruptions in website availability`,
					],
					additions: [
						`To the fullest extent permitted by law, the Firm’s total liability for claims arising out of or related to website use shall not exceed one hundred dollars ($100) or the amount you paid directly to the Firm specifically for website access, whichever is greater.`,
						`Some jurisdictions do not allow certain limitations of liability, so some limitations may not apply to you.`,
					],
				},
				{
					id: 'indemnification',
					title: 'Indemnification',
					subtitle:
						'You agree to defend, indemnify, and hold harmless the Firm and its owners, members, managers, employees, contractors, agents, representatives, successors, and affiliates from and against any claims, damages, losses, liabilities, penalties, costs, and expenses, including reasonable attorney’s fees, arising from or related to:',
					contentParagraphs: [],
					contentItems: [
						`Your use or misuse of the website or online services`,
						`Your violation of these Terms`,
						`Your violation of applicable law`,
						`Information, documents, or materials you submit to us`,
						`Your negligence, fraud, misconduct, or unauthorized actions`,
						`Your infringement of any third-party rights`,
					],
					additions: [],
				},
				{
					id: 'force-majeure',
					title: 'Force Majeure',
					subtitle: '',
					contentParagraphs: [
						`The Firm is not liable for delay or failure to perform caused by events beyond our reasonable control, including natural disasters, acts of God, labor disputes, internet outages, utility failures, cyberattacks, government actions, agency delays, pandemics, war, terrorism, civil unrest, supplier failures, software failures, or other events outside our control.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'termination-or-restriction-of-access',
					title: 'Termination or Restriction of Access',
					subtitle: '',
					contentParagraphs: [
						`We may modify, suspend, restrict, or terminate access to the website or online services at any time, with or without notice, for any reason, including violation of these Terms, suspected fraud, security concerns, nonpayment, misuse, or legal compliance.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'governing-law-and-venue',
					title: 'Governing Law and Venue',
					subtitle: '',
					contentParagraphs: [
						`These Terms are governed by the laws of the State of [Insert State], without regard to conflict-of-law principles.`,
						`Subject to any applicable engagement letter, written agreement, arbitration clause, or legal requirement, any dispute arising out of or related to these Terms, the website, or online services shall be brought exclusively in the state or federal courts located in [Insert County and State].`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'arbitration-option',
					title: 'Arbitration Option',
					subtitle: '',
					contentParagraphs: [
						`[Optional — Include only if approved by an attorney.]`,
						`To the fullest extent permitted by law, any dispute arising out of or related to these Terms, the website, or online services shall be resolved by binding arbitration in [Insert County and State] under the rules of [Insert Arbitration Provider], except that either party may seek injunctive relief or file a claim in small claims court where permitted.`,
						`By agreeing to arbitration, you and the Firm waive the right to a jury trial and to participate in a class action to the fullest extent permitted by law.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'class-action-waiver',
					title: 'Class Action Waiver',
					subtitle: '',
					contentParagraphs: [
						`To the fullest extent permitted by law, you agree that any claim against the Firm must be brought only in your individual capacity and not as a plaintiff or class member in any class, collective, consolidated, or representative proceeding.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'severability',
					title: 'Severability',
					subtitle: '',
					contentParagraphs: [
						`If any provision of these Terms is found invalid, unlawful, or unenforceable, the remaining provisions will remain in full force and effect. The invalid provision will be modified to the minimum extent necessary to make it valid and enforceable, if permitted by law.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'no-waiver',
					title: 'No Waiver',
					subtitle: '',
					contentParagraphs: [
						`Our failure to enforce any provision of these Terms does not waive our right to enforce that provision or any other provision in the future.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'entire-agreement-for-website-use',
					title: 'Entire Agreement for Website Use',
					subtitle: '',
					contentParagraphs: [
						`These Terms, together with our Privacy Policy and Website Disclaimer, constitute the entire agreement between you and the Firm regarding use of the website and online services.`,
						`Any professional services are governed by the applicable engagement letter, proposal, invoice, payment authorization, or written agreement. If there is a conflict between these Terms and a written engagement agreement, the written engagement agreement controls for the professional services covered by that agreement.`,
					],
					contentItems: [],
					additions: [],
				},
				{
					id: 'changes-to-terms',
					title: 'Changes to Terms',
					subtitle: '',
					contentParagraphs: [
						`We may update these Terms at any time by posting a revised version on the website. The revised Terms are effective as of the date posted unless otherwise stated. Continued use of the website or online services after changes are posted means you accept the revised Terms.`,
					],
					contentItems: [],
					additions: [],
				},
			],
		},
		firmContact: {
			email: `info@itcpa-us.com`,
			phone: `+1 (346) 475 - 5148`,
			website: `itcpa-us.com`,
		},
	},
};

export default pageData;
