export interface IReportData {
  message: string;
  data: {
    totalBaby: number;
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
  };
    average_gestational_age: string;
    maternal_age_group: [
      {
        mother_age: string;
        total: number;
      }
    ];
}
