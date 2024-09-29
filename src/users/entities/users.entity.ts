import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class Users extends Model<Users> {
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  users_id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  telegram_id: string;

  @ForeignKey(() => Users)
  @Column({ type: DataType.UUID, allowNull: true })
  referral_id: string;

  @CreatedAt
  @Column({ type: DataType.DATE })
  created_at: Date;

  @UpdatedAt
  @Column({ type: DataType.DATE })
  updated_at: Date;
}
