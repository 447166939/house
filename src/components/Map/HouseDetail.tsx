import React, { useEffect, useState,useMemo,Fragment } from "react";
import { Box, Button, ButtonProps, IconButton, InputAdornment, InputBase } from "@mui/material";
import * as styles from "./houseDetailStyle";
import closeIcon from "@/assets/images/close.png";
import logo from "@/assets/images/detailLogo.png";
import heartIcon from "@/assets/images/heart.png";
import shareIcon from "@/assets/images/share.png";
import eyeIcon from "@/assets/images/eye.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import { styled } from "@mui/material";
import { RootState } from "@/store/index";
import { useCreateProject } from "@/hooks/useCreateProject";
import { useRouter } from "next/router";
import {css} from '@emotion/react'

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
  const [caculateTabIdx, setCaculateIdx] = useState(0);
  const router = useRouter();
  const { mutate, isSuccess, data } = useCreateProject();
  const createProject = async () => {
    mutate({ house_id: 13, project_name: "自定义名称1" });
  };
  useEffect(() => {
    if (isSuccess) {
      router.replace("/project");
    }
  }, [isSuccess]);

  const handleClose = () => {
    onClose();
  };
  const handleChangeOverviewTab = (idx: number) => {
    setIdx(idx);
  };
  const handleCaculateTabChange = (idx: number) => {
    setCaculateIdx(idx);
  };

  const handleListItemClick = () => {
    onClose();
  };
  const caculate1=useMemo(()=>{
    return <Fragment key={1}>
      <Box css={styles.scrollBox}>
        <Box css={styles.inputBox}>
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
                  <InputAdornment css={styles.inutpos} position="end">
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
                  <InputAdornment css={styles.inutpos} position="end">
                    ❖
                  </InputAdornment>
                }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>高利贷款</Box>
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
                  <InputAdornment css={styles.inutpos} position="end">
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
                  <InputAdornment css={styles.inutpos} position="end">
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
                  <InputAdornment css={styles.inutpos} position="end">
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
        <Box css={styles.bottomInputBox}>
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
      </Box>
      <Button css={styles.saveBtn} variant={"contained"}>
        保存计算结果
      </Button>
    </Fragment>
  },[])
  const caculate2=useMemo(()=>{
    return (<Fragment key={2}>
      <Box css={styles.scrollBox}>
        <Box css={styles.inputBox}>
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
        <Box css={styles.bottomInputBox}>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>每月正向资金流</Box>
            <InputBase css={styles.inputText}
                       startAdornment={
                         <InputAdornment css={styles.inputPre} position="start">
                           $
                         </InputAdornment>
                       }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>资金投入</Box>
            <InputBase css={styles.inputText}
                       startAdornment={
                           <InputAdornment css={styles.inputPre} position="start">
                               $
                           </InputAdornment>
                       }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>现金投资回报比</Box>
            <InputBase css={styles.inputText}
                       endAdornment={
                           <InputAdornment css={styles.percentPos} position="end">
                               %
                           </InputAdornment>
                       }
            />
          </Box>
          <Box css={styles.inputGridItem}>
            <Box css={styles.inputLabel}>资本化率</Box>
            <InputBase css={styles.inputText}
                       endAdornment={
                           <InputAdornment css={styles.percentPos} position="end">
                               %
                           </InputAdornment>
                       }
            />
          </Box>
        </Box>
      </Box>
      <Button css={styles.saveBtn} variant={"contained"}>
        保存计算结果
      </Button>
    </Fragment>)
  },[])
  const caculate3=useMemo(()=>{
    return (<Fragment key={3}>
        <Box css={styles.scrollBox}>
            <Box css={styles.inputBox}>
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
            <Box css={styles.bottomInputBox}>
                <Box css={styles.inputGridItem}>
                    <Box css={styles.inputLabel}>每月正向资金流</Box>
                    <InputBase css={styles.inputText}
                               startAdornment={
                                   <InputAdornment css={styles.inputPre} position="start">
                                       $
                                   </InputAdornment>
                               }
                    />
                </Box>
                <Box css={styles.inputGridItem}>
                    <Box css={styles.inputLabel}>资金投入</Box>
                    <InputBase css={styles.inputText}
                               startAdornment={
                                   <InputAdornment css={styles.inputPre} position="start">
                                       $
                                   </InputAdornment>
                               }
                    />
                </Box>
                <Box css={styles.inputGridItem}>
                    <Box css={styles.inputLabel}>现金投资回报比</Box>
                    <InputBase css={styles.inputText}
                               endAdornment={
                                   <InputAdornment css={styles.percentPos} position="end">
                                       %
                                   </InputAdornment>
                               }
                    />
                </Box>
                <Box css={styles.inputGridItem}>
                    <Box css={styles.inputLabel}>资本化率</Box>
                    <InputBase css={styles.inputText}
                               endAdornment={
                                   <InputAdornment css={styles.percentPos} position="end">
                                       %
                                   </InputAdornment>
                               }
                    />
                </Box>
            </Box>
        </Box>
        <Button css={styles.saveBtn} variant={"contained"}>
            保存计算结果
        </Button>
    </Fragment>)
  },[])
  const caculate4=useMemo(()=>{
    return (<Fragment key={4}>
        <Box css={styles.scrollBox}>
            <Box css={styles.inputBox}>
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
            <Box css={styles.bottomInputBox}>
                <Box css={styles.inputGridItem}>
                    <Box css={styles.inputLabel}>每月偿还本息</Box>
                    <InputBase css={styles.inputText}
                               startAdornment={
                                   <InputAdornment css={styles.inputPre} position="start">
                                       $
                                   </InputAdornment>
                               }
                    />
                </Box>
                <Box css={styles.inputGridItem}>
                    <Box css={styles.inputLabel}>每月正向现金流</Box>
                    <InputBase css={styles.inputText}
                               startAdornment={
                                   <InputAdornment css={styles.inputPre} position="start">
                                       $
                                   </InputAdornment>
                               }
                    />
                </Box>
                <Box css={styles.inputGridItem}>
                    <Box css={styles.inputLabel}>再融资后资金投入</Box>
                    <InputBase css={styles.inputText}
                               startAdornment={
                                   <InputAdornment css={styles.inputPre} position="start">
                                       $
                                   </InputAdornment>
                               }
                    />
                </Box>
                <Box css={styles.inputGridItem}>
                    <Box css={styles.inputLabel}>再融资后投资回报比</Box>
                    <InputBase css={styles.inputText}
                               endAdornment={
                                   <InputAdornment css={styles.percentPos} position="end">
                                       %
                                   </InputAdornment>
                               }
                    />
                </Box>
                <Box css={styles.inputGridItem}>
                    <Box css={styles.inputLabel}>资本化率</Box>
                    <InputBase css={styles.inputText}
                               endAdornment={
                                   <InputAdornment css={styles.percentPos} position="end">
                                       %
                                   </InputAdornment>
                               }
                    />
                </Box>
            </Box>
        </Box>
        <Button css={styles.saveBtn} variant={"contained"}>
            保存计算结果
        </Button>
    </Fragment>)
  },[])
  const caculator=[caculate1,caculate2,caculate3,caculate4][caculateTabIdx]
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
              <Button onClick={createProject} css={styles.createBtn} variant={"contained"}>
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
          <Box css={styles.caculatorBox}>
            <Box css={styles.caculatorTitle}>投资回报计算器</Box>
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
            {caculator}
          </Box>
        </Box>
      </Box>
    </Box>
  ) : null;
};
export default HouseDetail;
