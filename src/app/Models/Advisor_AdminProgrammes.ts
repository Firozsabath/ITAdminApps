export class Advisor_AdminProgrammes {    
   
    constructor(
        public ID:number,
        public AdminName:any,
        public Programs:any,
        public PragramsID:number,
        ) {}   
    
}

export class Programs{    
    constructor(
        public programID: number,
        public programName: any
        ) {}
}