export class AppstatsDTO{
    
    constructor(
        public DataCount:Number,
        public UserCount:Number,
        public LoginCount:Number
    ) {
        this.DataCount = DataCount,
        this.UserCount = UserCount,
        this.LoginCount = LoginCount
    }   
}

export class AppStatisticDTO{
    constructor(
        public AdminAppStats:AppstatsDTO,
        public AdvisorAppStats:AppstatsDTO,
        public InvoiceGenStats:AppstatsDTO,
        public QuotationStats:AppstatsDTO
    ) {
        this.AdminAppStats = AdminAppStats,
        this.AdvisorAppStats = AdvisorAppStats,
        this.InvoiceGenStats = InvoiceGenStats,
        this.QuotationStats = QuotationStats
    }
}

export class ChartView{
    constructor(
        public Dimension:any,
        public Quantity:number        
    ) {
        this.Dimension = Dimension,
        this.Quantity = Quantity       
    }
}