import React, { useState } from "react";
import { Box, Button, ButtonProps, IconButton } from "@mui/material";
import * as styles from "./houseDetailStyle";
import closeIcon from "@/assets/images/close.png";
import logo from "@/assets/images/detailLogo.png";
import heartIcon from "@/assets/images/heart.png";
import shareIcon from "@/assets/images/share.png";
import hamburgerIcon from "@/assets/images/hanburger.png";
import eyeIcon from "@/assets/images/eye.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import { styled } from "@mui/material";
import { RootState } from "@/store/index";
export interface IHouseDetail {
  open: boolean;
  onClose: () => void;
}
const GreenButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#000",
  backgroundColor: "#00E1FE",
  "&:hover": {
    backgroundColor: "#00B4CB"
  }
}));
const GreyButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#fff",
  backgroundColor: "#393A3F",
  "&:hover": {
    backgroundColor: "#212124"
  }
}));
const HouseDetail: React.FC<IHouseDetail> = (props) => {
  const { detail } = useSelector((state: RootState) => state.map);
  const { onClose, open } = props;
  const [idx, setIdx] = useState(0);

  const handleClose = () => {
    onClose();
  };
  const handleChangeOverviewTab = (idx: number) => {
    setIdx(idx);
  };

  const handleListItemClick = () => {
    onClose();
  };
  return open ? (
    <Box css={styles.container}>
      <Box css={styles.title}>房产详情</Box>
      <IconButton onClick={handleClose} css={styles.closeBtn}>
        <Image css={styles.closeIcon} src={closeIcon} alt={""} />
      </IconButton>
      <Box css={styles.content}>
        <Box css={styles.picBox}>
          {detail.pictures.map((item: any, index: number) => (
            <Box css={styles.picItem} key={index}>
              <Image width={480} height={361} css={styles.pic} src={item} alt={""} />
            </Box>
          ))}
        </Box>
        <Box css={styles.rightBox}>
          <Box css={styles.midBox}>
            <Box css={styles.navBox}>
              <Image css={styles.logo} src={logo} alt={""} />
              <IconButton css={styles.heartBtn}>
                <Image css={styles.heartIcon} src={heartIcon} alt={""} />
              </IconButton>
              <IconButton>
                <Image css={styles.shareIcon} src={shareIcon} alt={""} />
              </IconButton>
              <IconButton>
                <Image css={styles.eyeIcon} src={eyeIcon} alt={""} />
              </IconButton>
            </Box>
            <Box css={styles.moneyText}>{detail.money}</Box>
            <Box css={styles.addressText}>{detail.address}</Box>
            <Box css={styles.saleBox}>
              <Box css={styles.saleLabel}>For sale</Box>
              <Box css={styles.saleText}>
                <span css={styles.saleName}>Zestimatee：</span>
                <span css={styles.saleMoney}>$143,300</span>
              </Box>
            </Box>
            <Box css={styles.paymentBox}>
              <Box css={styles.paymentLabel}>Est.: $927/mos</Box>
              <Box css={styles.paymentText}>Personalize this payment</Box>
            </Box>
            <Box css={styles.buttonBox}>
              <Button css={styles.createBtn} variant={"contained"}>
                创建REI项目
              </Button>
              <GreenButton css={styles.backupBtn} variant={"contained"}>
                存入备选
              </GreenButton>
              <GreyButton css={styles.documentBtn} variant={"contained"}>
                存入档案
              </GreyButton>
            </Box>
            <Box css={styles.overviewTab}>
              {detail.links.map((item: any, index: number) => (
                <Box
                  onClick={handleChangeOverviewTab.bind(null, index)}
                  css={styles.overviewTabItem({ isActive: idx == index })}
                  key={index}>
                  {item.text}
                </Box>
              ))}
            </Box>
            <Box css={styles.scrollContainer}>
              <Box css={styles.overviewText}>{detail.overviewText}</Box>
              <Box css={styles.overviewTitle}>Overview</Box>
              <Box css={styles.overviewContent}>{detail.overviewContent}</Box>
              <Box css={styles.showMore}>Show more</Box>
              <Box css={styles.viewerBox}>
                <Box css={styles.viewerItem}>
                  <span css={styles.daynum}>{detail.day}</span>
                  <span css={styles.dayText}> day on Zillow</span>
                </Box>
                <Box css={styles.viewerItem}>
                  <span css={styles.viewnum}>{detail.views}</span>
                  <span css={styles.viewText}> views</span>
                </Box>
                <Box css={styles.viewerItem}>
                  <span css={styles.savenum}>{detail.save}</span>
                  <span css={styles.saveText}> saves</span>
                </Box>
              </Box>
              <Box css={styles.descriptionText}>{detail.description}</Box>
            </Box>
          </Box>
          <Box css={styles.caculatorBox}></Box>
        </Box>
      </Box>
    </Box>
  ) : null;
};
export default HouseDetail;
