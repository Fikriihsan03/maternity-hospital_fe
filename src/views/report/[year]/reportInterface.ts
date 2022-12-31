export interface IReportData {
  message: string;
  data: {
    total_baby: number;
    total_mother:number;
    average_gestational_age: string;
    birth_description: {
      healthy: number;
      disabled: number;
      died: number;
    };
    baby_gender: {
      male: number;
      female: number;
    };
    birthing_method: {
      lotus: number;
      water: number;
      vaginal: number;
      gentle: number;
      caesar: number;
    };
    maternal_age_group: [
      {
        mother_age: string;
        total_baby: number;
      }
    ];
  };
}
