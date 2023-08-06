import React, { Fragment, useMemo, useState } from "react";
import { Box, Button, InputAdornment, InputBase } from "@mui/material";
import UsuryDialog from "@/components/common/UsaryDialog";
import FixedDialog from "@/components/common/FixedDialog";
import OwnDialog from "@/components/common/OwnDialog";
import LendDialog from "@/components/common/LendDialog";
import BuyDialog from "@/components/common/buyDialog";
import SellDialog from "@/components/common/SellDialog";
import * as styles from "./caculateTapaneStyle";
export interface ICaculateTabpane {}
const CaculateTabpane: React.FC<ICaculateTabpane> = () => {
  const [caculateTabIdx, setCaculateIdx] = useState(0);
  const [usaryModalVisible, setUsaryModalVisible] = useState(false);
  const [fixedModalVisible, setFixedModalVisible] = useState(false);
  const [ownModalVisible, setOwnModalVisible] = useState(false);
  const [lendModalVisible, setLendModalVisible] = useState(false);
  const [buyModalVisible, setBuyModalVisible] = useState(false);
  const [sellModalVisible, setSellModalVisible] = useState(false);
  const handleCaculateTabChange = (idx: number) => {
    setCaculateIdx(idx);
  };
  const openUsary = () => {
    setUsaryModalVisible(true);
  };
  const openFixed = () => {
    setFixedModalVisible(true);
  };
  const openOwn = () => {
    setOwnModalVisible(true);
  };
  const openLend = () => {
    setLendModalVisible(true);
  };
  const openBuy = () => {
    setBuyModalVisible(true);
  };
  const openSell = () => {
    setSellModalVisible(true);
  };
  const closeUsary = () => {
    setUsaryModalVisible(false);
  };
  const closeFixed = () => {
    setFixedModalVisible(false);
  };
  const closeOwn = () => {
    setOwnModalVisible(false);
  };
  const closeLend = () => {
    setLendModalVisible(false);
  };
  const closeBuy = () => {
    setBuyModalVisible(false);
  };
  const closeSell = () => {
    setSellModalVisible(false);
  };
  const caculate1 = useMemo(() => {
    return (
      <>
        <Box css={styles.caculateBox}>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>购入价格</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>固定利率贷款</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment onClick={openFixed} css={styles.inutpos} position="end">
                  ❖
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>固定利率融资成本</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>买入成交成本</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment onClick={openBuy} css={styles.inutpos} position="end">
                  ❖
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>硬钱贷款</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment onClick={openUsary} css={styles.inutpos} position="end">
                  ❖
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>硬钱融资成本</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>改造投入</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>私人贷款</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment onClick={openLend} css={styles.inutpos} position="end">
                  ❖
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>私人贷款融资成本</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>预期改造后售价</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>卖出成交成本</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment onClick={openSell} css={styles.inutpos} position="end">
                  ❖
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>房产持有成本</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment onClick={openOwn} css={styles.inutpos} position="end">
                  ❖
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>项目周期</Box>
            <InputBase css={styles.inputText} />
          </Box>
        </Box>
        <Box css={styles.bottomCaculateBox}>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>资金投入</Box>
            <InputBase css={styles.inputText} />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>利润</Box>
            <InputBase css={styles.inputText} />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>投资回报比</Box>
            <InputBase css={styles.inputText} />
          </Box>
        </Box>
        <Button css={styles.saveBtn} variant={"contained"}>
          保存计算结果
        </Button>
      </>
    );
  }, []);
  const caculate2 = useMemo(() => {
    return (
      <Fragment key={2}>
        <Box css={styles.caculateBox}>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>目前房租</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>市场预期房租</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>租金房价比值</Box>
            <InputBase
              css={styles.inputText}
              endAdornment={
                <InputAdornment css={styles.percentPos} position="end">
                  %
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>转售固定利率贷款</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment css={styles.inutpos} position="end">
                  ❖
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>转售固定利率融资成本</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>每月偿还本息</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>成交成本</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment css={styles.inutpos} position="end">
                  ❖
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>每月房产持有成本</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment css={styles.inutpos} position="end">
                  ❖
                </InputAdornment>
              }
            />
          </Box>
        </Box>
        <Box css={styles.bottomCaculateBox}>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>每月正向资金流</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>资金投入</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>现金投资回报比</Box>
            <InputBase
              css={styles.inputText}
              endAdornment={
                <InputAdornment css={styles.percentPos} position="end">
                  %
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>资本化率</Box>
            <InputBase
              css={styles.inputText}
              endAdornment={
                <InputAdornment css={styles.percentPos} position="end">
                  %
                </InputAdornment>
              }
            />
          </Box>
        </Box>

        <Button css={styles.saveBtn} variant={"contained"}>
          保存计算结果
        </Button>
      </Fragment>
    );
  }, []);
  const caculate3 = useMemo(() => {
    return (
      <Fragment key={3}>
        <Box css={styles.caculateBox}>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>目前房租</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>市场预期房租</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>租金房价比值</Box>
            <InputBase
              css={styles.inputText}
              endAdornment={
                <InputAdornment css={styles.percentPos} position="end">
                  %
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>房产持有成本</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment css={styles.inutpos} position="end">
                  ❖
                </InputAdornment>
              }
            />
          </Box>
        </Box>
        <Box css={styles.bottomCaculateBox}>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>每月正向资金流</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>资金投入</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>现金投资回报比</Box>
            <InputBase
              css={styles.inputText}
              endAdornment={
                <InputAdornment css={styles.percentPos} position="end">
                  %
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>资本化率</Box>
            <InputBase
              css={styles.inputText}
              endAdornment={
                <InputAdornment css={styles.percentPos} position="end">
                  %
                </InputAdornment>
              }
            />
          </Box>
        </Box>
        <Button css={styles.saveBtn} variant={"contained"}>
          保存计算结果
        </Button>
      </Fragment>
    );
  }, []);
  const caculate4 = useMemo(() => {
    return (
      <Fragment key={4}>
        <Box css={styles.caculateBox}>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>每月市场预期房租</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>每月房产持有成本</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment css={styles.inutpos} position="end">
                  ❖
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>再融资固定利率贷款</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment css={styles.inutpos} position="end">
                  ❖
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>再融资固定利率融资成本</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>房屋空置率和维护成本</Box>
            <InputBase
              css={styles.inputText}
              endAdornment={
                <InputAdornment css={styles.percentPos} position="end">
                  %
                </InputAdornment>
              }
            />
          </Box>
        </Box>
        <Box css={styles.bottomCaculateBox}>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>每月偿还本息</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>每月正向现金流</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>再融资后资金投入</Box>
            <InputBase
              css={styles.inputText}
              startAdornment={
                <InputAdornment css={styles.inputPre} position="start">
                  $
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>再融资后投资回报比</Box>
            <InputBase
              css={styles.inputText}
              endAdornment={
                <InputAdornment css={styles.percentPos} position="end">
                  %
                </InputAdornment>
              }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>资本化率</Box>
            <InputBase
              css={styles.inputText}
              endAdornment={
                <InputAdornment css={styles.percentPos} position="end">
                  %
                </InputAdornment>
              }
            />
          </Box>
        </Box>
        <Button css={styles.saveBtn} variant={"contained"}>
          保存计算结果
        </Button>
      </Fragment>
    );
  }, []);
  const caculator = [caculate1, caculate2, caculate3, caculate4][caculateTabIdx];
  return (
    <Box css={styles.container}>
      <Box css={styles.caculateTab}>
        {["重售房产", "转售房产", "自持有", "重做贷款"].map((item: any, index: number) => (
          <Box
            onClick={handleCaculateTabChange.bind(null, index)}
            css={styles.cateTabItem({ isActive: caculateTabIdx == index })}
            key={index}>
            {item}
          </Box>
        ))}
      </Box>
      <Box css={styles.caculateWrapper}>
        <UsuryDialog
          onClose={closeUsary}
          rootStyle={styles.usaryModal}
          visible={usaryModalVisible}
        />
        <FixedDialog
          onClose={closeFixed}
          rootStyle={styles.fixedModal}
          visible={fixedModalVisible}
        />
        <OwnDialog rootStyle={styles.ownModal} visible={ownModalVisible} onClose={closeOwn} />
        <LendDialog rootStyle={styles.lendModal} visible={lendModalVisible} onClose={closeLend} />
        <BuyDialog rootStyle={styles.buyModal} visible={buyModalVisible} onClose={closeBuy} />
        <SellDialog visible={sellModalVisible} onClose={closeSell} rootStyle={styles.sellModal} />
        {caculator}
      </Box>
    </Box>
  );
};

export default CaculateTabpane;
