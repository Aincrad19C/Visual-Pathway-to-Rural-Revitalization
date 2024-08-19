import { Provide } from "@midwayjs/core";
import { InjectEntityModel } from "@midwayjs/typeorm";
import { Repository } from "typeorm";
import { Map } from "../entity/map.entity";

@Provide()
export class MapService {
    @InjectEntityModel(Map)
    mapModel: Repository<Map>;

    async createMap(data: object): Promise<Map> {
        const newMap = new Map();
        newMap.data = data;
        return this.mapModel.save(newMap);
    }

    async getMapById(id: number): Promise<Map | undefined> {
        return this.mapModel.findOne({ where: { id } });
    }
    
    async deleteMap(mapId: number): Promise<void> {
        await this.mapModel.delete(mapId);
    }
}