import { axiosService } from "./axiosService";

const spacexService = {
    getAllSpacex: () => axiosService.get('launches')
};

export { spacexService };
