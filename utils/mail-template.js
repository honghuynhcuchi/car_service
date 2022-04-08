export const createBookingMailTemplate = ({ data }) => {

  return `<!DOCTYPE html>

    <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
    
    <head>
        <title></title>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
        <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css" />
        <!--<![endif]-->
        <style>
            * {
                box-sizing: border-box;
            }
    
            body {
                margin: 0;
                padding: 0;
            }
    
            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: inherit !important;
            }
    
            #MessageViewBody a {
                color: inherit;
                text-decoration: none;
            }
    
            p {
                line-height: inherit
            }
    
            @media (max-width:700px) {
                .icons-inner {
                    text-align: center;
                }
    
                .icons-inner td {
                    margin: 0 auto;
                }
    
                .row-content {
                    width: 100% !important;
                }
    
                .column .border {
                    display: none;
                }
    
                table {
                    table-layout: fixed !important;
                }
    
                .stack .column {
                    width: 100%;
                    display: block;
                }
            }
        </style>
    </head>
    
    <body style="background-color: #f9f9f9; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
        <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f9f9f9;" width="100%">
            <tbody>
                <tr>
                    <td>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1"
                            role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                            <tbody>
                                <tr>
                                    <td>
                                        <table align="center" border="0" cellpadding="0" cellspacing="0"
                                            class="row-content stack" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #e6eff0; color: #000000; width: 680px;"
                                            width="680">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                        width="100%">
                                                        <table border="0" cellpadding="0" cellspacing="0"
                                                            class="image_block" role="presentation"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                            width="100%">
                                                            <tr>
                                                                <td
                                                                    style="padding-bottom:10px;padding-top:10px;width:100%;padding-right:0px;padding-left:0px;">
                                                                    <div align="center" style="line-height:10px"><img
                                                                            alt="Yourlogo Light" src="https://firebasestorage.googleapis.com/v0/b/tretre-4726b.appspot.com/o/logo.png?alt=media&token=cb6ca3c3-bc49-4f9e-95e5-36e313255baa"
                                                                            style="display: block; height: auto; border: 0; width: 175px; max-width: 100%;"
                                                                            title="Yourlogo Light" width="175" /></div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2"
                            role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                            <tbody>
                                <tr>
                                    <td>
                                        <table align="center" border="0" cellpadding="0" cellspacing="0"
                                            class="row-content stack" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #cbdbef; color: #000000; width: 680px;"
                                            width="680">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 20px; padding-bottom: 20px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                        width="100%">
                                                        <table border="0" cellpadding="0" cellspacing="0" class="text_block"
                                                            role="presentation"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                            width="100%">
                                                            <tr>
                                                                <td
                                                                    style="padding-bottom:25px;padding-left:20px;padding-right:20px;padding-top:80px;">
                                                                    <div
                                                                        style="font-family: Georgia, 'Times New Roman', serif">
                                                                        <div class="txtTinyMce-wrapper"
                                                                            style="font-size: 14px; font-family: Georgia, Times, 'Times New Roman', serif; mso-line-height-alt: 16.8px; color: #2f2f2f; line-height: 1.2;">
                                                                            <p
                                                                                style="margin: 0; font-size: 14px; text-align: center;">
                                                                                <span style="font-size:42px;">Lịch Hẹn
                                                                                    Mới</span></p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table border="0" cellpadding="0" cellspacing="0" class="text_block"
                                                            role="presentation"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                            width="100%">
                                                            <tr>
                                                                <td
                                                                    style="padding-bottom:80px;padding-left:30px;padding-right:30px;padding-top:10px;">
                                                                    <div style="font-family: sans-serif">
                                                                        <div class="txtTinyMce-wrapper"
                                                                            style="font-size: 14px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 21px; color: #2f2f2f; line-height: 1.5;">
                                                                            <p
                                                                                style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 24px;">
                                                                                <span style="font-size:16px;">Chào
                                                                                    <strong><u>Hồng</u></strong>,</span></p>
                                                                            <p
                                                                                style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                                 </p>
                                                                            <p
                                                                                style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 24px;">
                                                                                <span style="font-size:16px;"><span
                                                                                        style="">Một khách hàng đã gửi một
                                                                                        đơn đặt lịch hẹn với
                                                                                        bạn</span></span></p>
                                                                            <p
                                                                                style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 24px;">
                                                                                <span style="font-size:16px;">thông qua
                                                                                    website của bạn vào lúc <strong>${data['createdAt']}.</strong></span></p>
                                                                            <p
                                                                                style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                                 </p>
                                                                            <p
                                                                                style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                                <span
                                                                                    style="color:#000000;font-size:14px;">Vui
                                                                                    lòng kiểm tra thông tin khách hàng dưới
                                                                                    đây</span></p>
                                                                            <p
                                                                                style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                                <span
                                                                                    style="color:#000000;font-size:14px;">và
                                                                                    xác nhận lại với khách hàng của
                                                                                    bạn.</span></p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3"
                            role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                            <tbody>
                                <tr>
                                    <td>
                                        <table align="center" border="0" cellpadding="0" cellspacing="0"
                                            class="row-content stack" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                            width="680">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                        width="100%">
                                                        <table border="0" cellpadding="0" cellspacing="0" class="text_block"
                                                            role="presentation"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                            width="100%">
                                                            <tr>
                                                                <td
                                                                    style="padding-bottom:20px;padding-left:20px;padding-right:20px;padding-top:50px;">
                                                                    <div style="font-family: sans-serif">
                                                                        <div class="txtTinyMce-wrapper"
                                                                            style="font-size: 14px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 16.8px; color: #2f2f2f; line-height: 1.2;">
                                                                            <p
                                                                                style="margin: 0; text-align: center; letter-spacing: 1px;">
                                                                                <strong><span style="font-size:18px;">Chi
                                                                                        Tiết Lịch Hẹn</span></strong></p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4"
                            role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                            <tbody>
                                <tr>
                                    <td>
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content"
                                            role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;"
                                            width="680">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-bottom: 0px solid #5D77A9; border-left: 0px solid #5D77A9; border-right: 0px solid #5D77A9; border-top: 0px solid #5D77A9;"
                                                        width="50%">
                                                        <table border="0" cellpadding="0" cellspacing="0" class="text_block"
                                                            role="presentation"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                            width="100%">
                                                            <tr>
                                                                <td
                                                                    style="padding-bottom:15px;padding-left:10px;padding-right:20px;padding-top:10px;">
                                                                    <div style="font-family: sans-serif">
                                                                        <div class="txtTinyMce-wrapper"
                                                                            style="font-size: 14px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 28px; color: #393d47; line-height: 2;">
                                                                            <p
                                                                                style="margin: 0; font-size: 16px; text-align: right;">
                                                                                <strong><span style="font-size:16px;"><span
                                                                                            style="color:#5d77a9;">Họ &
                                                                                            Tên</span></span></strong></p>
                                                                            <p
                                                                                style="margin: 0; font-size: 16px; text-align: right;">
                                                                                <strong><span style="font-size:16px;"><span
                                                                                            style="color:#5d77a9;">Số điện
                                                                                            thoại</span></span></strong></p>
                                                                            <p
                                                                                style="margin: 0; font-size: 16px; text-align: right;">
                                                                                <strong><span style="font-size:16px;"><span
                                                                                            style="color:#5d77a9;">Loại
                                                                                            xe</span></span></strong></p>
                                                                            <p
                                                                                style="margin: 0; font-size: 16px; text-align: right;">
                                                                                <strong><span style="font-size:16px;"><span
                                                                                            style="color:#5d77a9;">Số
                                                                                            Km</span></span></strong></p>
                                                                            <p
                                                                                style="margin: 0; font-size: 16px; text-align: right;">
                                                                                <strong><span style="font-size:16px;"><span
                                                                                            style="color:#5d77a9;">Biển kiểm
                                                                                            soát</span></span></strong></p>
                                                                            <p
                                                                                style="margin: 0; font-size: 16px; text-align: right;">
                                                                                <strong><span style="font-size:16px;"><span
                                                                                            style="color:#5d77a9;">Loại dịch
                                                                                            vụ</span></span></strong></p>
                                                                            <p
                                                                                style="margin: 0; font-size: 16px; text-align: right;">
                                                                                <strong><span style="font-size:16px;"><span
                                                                                            style="color:#5d77a9;">Ngày/tháng/năm</span></span></strong>
                                                                            </p>
                                                                            <p
                                                                                style="margin: 0; font-size: 16px; text-align: right;">
                                                                                <strong><span style="font-size:16px;"><span
                                                                                            style="color:#5d77a9;">Vào
                                                                                            lúc</span></span></strong></p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td class="column column-2"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-bottom: 0px solid #5D77A9; border-left: 0px solid #5D77A9; border-right: 0px solid #5D77A9; border-top: 0px solid #5D77A9;"
                                                        width="50%">
                                                        <table border="0" cellpadding="0" cellspacing="0" class="text_block"
                                                            role="presentation"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                            width="100%">
                                                            <tr>
                                                                <td
                                                                    style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:10px;">
                                                                    <div style="font-family: sans-serif">
                                                                        <div class="txtTinyMce-wrapper"
                                                                            style="font-size: 14px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 28px; color: #2f2f2f; line-height: 2;">
                                                                            <p
                                                                                style="margin: 0; font-size: 16px; text-align: left; mso-line-height-alt: 32px;">
                                                                                <span style="font-size:16px;">${data['fullname']}</span></p>
                                                                            <p
                                                                                style="margin: 0; font-size: 16px; text-align: left; mso-line-height-alt: 32px;">
                                                                                <span
                                                                                    style="font-size:16px;">${data['phone']}</span>
                                                                            </p>
                                                                            <p
                                                                                style="margin: 0; font-size: 16px; text-align: left;">
                                                                                ${data['car-type']}</p>
                                                                            <p
                                                                                style="margin: 0; font-size: 16px; text-align: left;">
                                                                                ${data['km-number']}</p>
                                                                            <p
                                                                                style="margin: 0; font-size: 16px; text-align: left;">
                                                                                ${data['license-plate']}</p>
                                                                            <p
                                                                                style="margin: 0; font-size: 16px; text-align: left;">
                                                                                ${data['service-type']}</p>
                                                                            <p
                                                                                style="margin: 0; font-size: 16px; text-align: left;">
                                                                                ${data['date-go']}</p>
                                                                            <p
                                                                                style="margin: 0; font-size: 16px; text-align: left;">
                                                                                ${data['time-go']}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5"
                            role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                            <tbody>
                                <tr>
                                    <td>
                                        <table align="center" border="0" cellpadding="0" cellspacing="0"
                                            class="row-content stack" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1f2674; color: #000000; width: 680px;"
                                            width="680">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 15px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                        width="100%">
                                                        <table border="0" cellpadding="0" cellspacing="0"
                                                            class="image_block" role="presentation"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                            width="100%">
                                                            <tr>
                                                                <td style="width:100%;padding-right:0px;padding-left:0px;">
                                                                    <div align="center" style="line-height:10px"><img
                                                                            src="https://firebasestorage.googleapis.com/v0/b/tretre-4726b.appspot.com/o/logo_white.png?alt=media&token=12dc63b1-d7a5-4062-ae4c-f312e8553ae7"
                                                                            style="display: block; height: auto; border: 0; width: 60px; max-width: 100%;"
                                                                            width="60" /></div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table border="0" cellpadding="10" cellspacing="0"
                                                            class="text_block" role="presentation"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                            width="100%">
                                                            <tr>
                                                                <td>
                                                                    <div style="font-family: sans-serif">
                                                                        <div class="txtTinyMce-wrapper"
                                                                            style="font-size: 14px; mso-line-height-alt: 21px; color: #f9f9f9; line-height: 1.5; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
                                                                            <p
                                                                                style="margin: 0; font-size: 12px; text-align: center; mso-line-height-alt: 21px;">
                                                                                 </p>
                                                                            <p
                                                                                style="margin: 0; font-size: 12px; text-align: center;">
                                                                                Hotline Tư Vấn Dịch Vụ: 0909.208.916</p>
                                                                            <p
                                                                                style="margin: 0; font-size: 12px; text-align: center;">
                                                                                CSKH: 028.7300.9909</p>
                                                                            <p
                                                                                style="margin: 0; font-size: 12px; text-align: center;">
                                                                                Trụ sở chính: 409 Nguyễn Văn Bá, P.
                                                                                Trường Thọ, Tp. Thủ Đức, HCM</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6"
                            role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                            <tbody>
                                <tr>
                                    <td>
                                        <table align="center" border="0" cellpadding="0" cellspacing="0"
                                            class="row-content stack" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1f2674; color: #000000; width: 680px;"
                                            width="680">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 20px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                        width="100%">
                                                        <table border="0" cellpadding="10" cellspacing="0"
                                                            class="text_block" role="presentation"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                            width="100%">
                                                            <tr>
                                                                <td>
                                                                    <div style="font-family: sans-serif">
                                                                        <div class="txtTinyMce-wrapper"
                                                                            style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #cfceca; line-height: 1.2; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
                                                                            <p
                                                                                style="margin: 0; font-size: 14px; text-align: center;">
                                                                                <span style="font-size:12px;">2022 © All
                                                                                    Rights Reserved</span></p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        
                    </td>
                </tr>
            </tbody>
        </table><!-- End -->
    </body>
    
    </html>`;
};
