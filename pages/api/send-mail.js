import { sendMail } from "../../services/mail";
import {createBookingMailTemplate} from "../../utils/mail-template";
import moment from "moment";


moment.locale("vi");

const handle = async (req,res) => {
    let data= req.body;
    const {type} = data;
    let template = ""
    let createdAt = moment(new Date()).format("LT - DD/MM/YYYY");
    data = {
        ...data,
        createdAt,
    }
    if(type==="booking"){
        template = createBookingMailTemplate({data});
        await sendMail({
            to:"huynhphihongk18@gmail.com",
            subject:"Lịch hẹn mới từ Hệ thống Dịch vụ Huyndai",
            html:template,
            text:"Lịch hẹn mới từ Hệ thống Dịch vụ Huyndai"
        })
        .then(()=>{
            return res.status(200).json({message:"ok"});
        })
        .catch((err)=>{
            return res.status(500).json({message:"Đã xảy ra lỗi khi gửi mail"})
        })
    }
    
}

export default handle;