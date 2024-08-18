import { Body, Controller, Inject, Param, Post } from "@midwayjs/core";
import { MapService } from "../service/map.service";

@Controller('/api/map')
export class MapController {
    @Inject()
    mapService: MapService;

    @Post('/create')
    async createMap(@Body() mapData: any) {
        try {
            const { data } = mapData;
            await this.mapService.createMap(data);
            return { success: true, message: "新地图创建成功" };
        } catch (error) {
            return { success: false, message: "地图创建失败" };
        }
    }

    @Post('/getMap/:mapId')
    async getMapById(@Param('mapId') mapId: number) {
        try {
            const map = await this.mapService.getMapById(mapId);
            return { succsee: true, data: map.data, message: "获取成功" };
        } catch (error) {
            return { succsee: false, data: null, message: "获取失败" };
        }
    }

    @Post('/delete/:mapId')
    async deleteMap(@Param('mapId') mapId: number): Promise<void> {
        await this.mapService.deleteMap(mapId);
    }
}