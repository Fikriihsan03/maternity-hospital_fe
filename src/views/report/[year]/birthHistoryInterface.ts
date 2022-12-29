export interface IHistory  {
    current_page: number;
    data: [
      {
        id: number;
        mother_name: string;
        mother_age: number;
        gestational_age: number;
        baby_gender: number;
        baby_weight: number;
        baby_length: number;
        birth_description: string;
        birthing_method: number;
        created_at: Date;
        updated_at: Date;
      }
    ];
    first_page_url: string;
    from: 2;
    last_page: 4;
    last_page_url: string;
    links: [
      {
        url: string;
        label: string;
        active: false;
      },
      {
        url: string;
        label: "1";
        active: false;
      },
      {
        url: string;
        label: string;
        active: true;
      },
      {
        url: string;
        label: string;
        active: false;
      },
      {
        url: string;
        label: string;
        active: false;
      },
      {
        url: string;
        label: string;
        active: false;
      }
    ];
    next_page_url: string;
    path: string;
    per_page: 1;
    prev_page_url: string;
    to: number;
    total: number;
  }