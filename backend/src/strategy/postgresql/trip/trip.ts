import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { truck as Truck } from "./truck";
import { driver as Driver } from "./driver";
import { shipment as Shipment } from "./shipment";

@Entity()
export class trip {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  routeFrom: string;

  @Column()
  routeTo: string;

  @ManyToMany(() => Driver)
  @JoinTable()
  drivers: Driver[];

  @ManyToMany(() => Shipment)
  @JoinTable()
  shipments: Shipment[];

  @Column({ type: "int", nullable: true })
  truckId: number;

  @ManyToOne(() => Truck, truck => truck.trips)
  truck: Truck;
}
