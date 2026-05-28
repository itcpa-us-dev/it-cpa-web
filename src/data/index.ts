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
				{ label: 'Chính Sách Bảo Mật', href: '/privacy-policy' },
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
				text: '© 2024 IT CPA & Advisory, PLLC. All rights reserved.',
				slogan: 'PRECISION IN EVERY NUMBER',
			},
		},
	},
};

export default pageData;
