import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import User from '../../../../user/infra/typeorm/entities/User';
import Survey from './Survey';

@Entity('surveys_users')
class SurveyUser {
  @PrimaryColumn()
  readonly id: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'survey_id' })
  surveyId: string;

  @Column()
  value: number;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Survey, { eager: true })
  @JoinColumn({ name: 'survey_id' })
  survey: Survey;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default SurveyUser;
