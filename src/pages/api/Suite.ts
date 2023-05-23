import HttpService from "@/services/HttpService";

export interface Suite {
    name: string;
    description: string;
    points: number;
    completed: boolean;
}

export default class SuiteService {

    static getAll(): Promise<Suite[]> {
        return HttpService.get('suite');
    }

    static add(suite: Suite): Promise<any> {
        return HttpService.post('suite', suite, {'Content-Type': 'application/json'});
    }

    static delete(id: number): Promise<Suite> {
        return HttpService.delete('suite'+id);
    }
}