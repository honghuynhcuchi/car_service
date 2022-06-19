import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import Level1Image from "../../public/images/maintain_table/cap1.png";
import Level2Image from "../../public/images/maintain_table/cap2.png";
import Level3Image from "../../public/images/maintain_table/cap3.png";
import Level4Image from "../../public/images/maintain_table/cap4.png";
export const getServerSideProps = async ({ params }) => {

   
    return {
        props: {
           level:params.level
        }
    }
}

const images = {
    "1":Level1Image,
    "2":Level2Image,
    "3":Level3Image,
    "4":Level4Image
}

const PriceMaintain = ({level}) => {
    let imageToShow;
    if(level){
        imageToShow = images[level]
    }
    if(!imageToShow){
        return <Fragment>
            <Head>
                <title>Không tìm thấy kết quả</title>
            </Head>
            <h3 style={{ textAlign: "center", marginTop: "20px" }}>Không tìm thấy kết quả</h3>
        </Fragment>
    }
    
    return <Fragment>
        <Head>
            <title>Bảng Giá Bảo Dưỡng Cấp {level}</title>
        </Head>
        <div style={{ marginTop: "25px",marginBottom: "25px", display:"flex", flexDirection:"column", alignItems:"center", padding:"0px 5px" }} >
           <Image src={imageToShow} />
        </div>
    </Fragment>
}

export default PriceMaintain