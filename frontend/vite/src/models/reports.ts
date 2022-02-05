import { IUser } from "./auth";
import { IAnalysisService } from "./analysis";

export interface IReportListing {
    uid?: number;
    report_type?: string;
    created_at?: string;
    created_by_uid?: number;
    created_by?: IUser;
    period_start?: string;
    period_end?: string;
    date_column?: string;
    status?: string;
    analyses?: IAnalysisService[];
    analyses_uids?: number[];
    sample_states?: string[];
    location?: string;
}


