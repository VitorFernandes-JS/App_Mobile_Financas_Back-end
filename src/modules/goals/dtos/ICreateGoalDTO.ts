interface ICreateGoalDTO {
  id?: string;
  name: string;
  user_id?: string;
  amount: number;
  created_at?: Date;
  updated_at?: Date;
}

export { ICreateGoalDTO }