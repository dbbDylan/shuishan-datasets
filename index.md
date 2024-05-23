# SHUISHAN DATASETS
[![LICENSE](https://img.shields.io/badge/license-MIT-green)](https://github.com/TommySoya/shuishan-datasets/blob/master/LICENSE)

Open-sourced Dataset(s) from the [Shuishan(Sequoia) eLearning platform](https://www.shuishan.net.cn/)
一个基于[水杉在线学习平台](https://www.shuishan.net.cn/)的开源数据集库

## Intro.
This repo. is aimed to publicise our datasets collected from the Shuishan(Sequoia) eLearning platform, you can download and use it for your study. All of them are desensitized and easily used, which covers course resources, student behaviour and other data.

这个仓库用于公开我们从水杉在线学习平台收集的数据集，你可以下载并使用它们进行你的研究。所有数据集均对特殊字段进行了脱敏（所以如果您想进行特定人群的研究，这份数据集可能并不适合您），易于使用，涵盖课程资源、学生行为和其他数据。

## Dataests
Here is a list of datasets we have collected. (But there is only one dataset now~)
以下是我们目前公开的数据集们（暂时只有SHUISHAN-CLAD~）

 - [SHUISHAN-CLAD: Course Learning Action Dataset](#1.SHUISHAN-CLAD:CourseLearningActionDataset)
 - ...
 <!-- - [...](#Download-the-Data) -->

## Download the Data

We provide several options to download our dataset:

**Option 1.** Download via the `wget` command.

```shell
wget https://shuishan-dataset.oss-cn-shanghai.aliyuncs.com/SHUISHAN-CLAD.zip --no-check-certificate
unzip SHUISHAN-CLAD.zip
```

**Option 2.** Download manually through the following links:

 - Optional link 1: [Google Drive](https://drive.google.com/file/d/1l4OyNIvmdJRudIS-6TGj10HRnLFbfo8C/view?usp=drive_link)
 - Optional link 2: [Baidu Disk](https://pan.baidu.com/s/1u_MlzwfhNrR3tBMIlaK8vA?pwd=cmxd)
   - link: https://pan.baidu.com/s/1u_MlzwfhNrR3tBMIlaK8vA?pwd=cmxd
   - password: cmxd
 - Optional link 3: [Aliyun OSS](https://shuishan-dataset.oss-cn-shanghai.aliyuncs.com/SHUISHAN-CLAD.zip)

 We highly recommend you download the data via the `wget` command or the Aliyun OSS link, because it is usually the most up-to-date version.


## Data Descriptions

### 1. SHUISHAN-CLAD: Course Learning Action Dataset

This dataset contains 400,000+ records of course learning actions, including student learning activities, such as watching videos, reading articles, and completing exercises. The dataset is collected from 79 courses, and the data is collected from 11566 students.

The `json` files are in the following format:

```json
{
    "course_id": "10000001", 
    "course_type": 1,     /* Nature of the course, 1: Compulsory professional course / 2: Compulsory public course */
    "creator_id": "13720181912", 
    "creator_name": "张三", 
    "authority": 1,       /* Access Rights, 1: Public / 2: Classes Students / 3: Fees */
    "liked": 20,
    "viewed": 4000, 
    "create_time": "2020/03/23 13:23:51", 
    "update_time": "2023/03/23 12:45:12", 
    "teachclasses": [
        {
            "teachclass_id": "10000001", 
            "term": "2022-20231", 
            "start_date": "2020/02/24 00:00:00",    /* term start time */ 
            "finish_date": "2020/06/30 00:00:00",   /* term start time */ 
            "teacher_id": "13720181912", 
            "assistant_id": "1569260691612483585,1372731764832759810,1303989005536223234,1597863528202371073,1367464835498930178", 
            "students": [
                {
                    "student_id": "21723851905", 
                    "student_username": "512629102759", 
                    "gender": "0"   /* 1: male / 2: female */, 
                    "phone": "13312345678", 
                    "mail": "101@stu.ecnu.edu.cn", 
                    "major": "23级英语", 
                    "company_id": "000000", 
                    "last_login_time": "2022-03-16 09:42:30", 
                    "video_records": [
                        {
                            "id": "10000001", 
                            "resource_id": "10000001",
                            "start_time": "2021-07-27 08:20:38",    /* Start watching video time */
                            "end_time": "2021-07-27 09:20:40",      /* End watching video time */
                            "view_time": "3602",                    /* Viewing time (seconds) */
                            "play_speed": "1.0" 
                        }, 
                        {"...": "..."}
                    ], 
                    "exam_records": [
                        {
                            "id": "10000001", 
                            "resource_id": "10000001",
                            "type": 1,  /* 1: General Exam / 2: Shuishan-Huhang Exam / 0 or null: Quiz / 9: Class Assessment Streaming */
                            "score": 80, 
                            "total_score": 100, 
                            "start_time": "2021-07-27 08:20:38",    /* Start exam time */
                            "complete_time": "2021-07-27 09:20:40", /* Complete exam time */
                            "duration": "87974",                    /* Time spent (seconds) */
                            "left_time": "17296 or null"            /* Time remaining (seconds) */
                        }, 
                        {"...": "..."}
                    ], 
                    "homework_records": [
                        {
                            "homework_id": "10000001", 
                            "homework_file_id": "10000001", 
                            "resource_id": "10000001", 
                            "file_size": "1024", 
                            "file_type": ".zip", 
                            "score": 100, 
                            "title": "程序设计第一次作业.zip", 
                            "url": "https://shuishanecnu.oss-accelerate.aliyuncs.com/***",  
                            "line_nums": "5", 
                            "max_similarity": "0.95",   /* Maximum code similarity */
                            "teacher_comment": "一条教师评论意见", 
                            "submit_time": "2021-07-27 09:20:40"
                        }, 
                        {"...": "..."}
                    ], 
                    "attendance_records": [
                        {
                            "check_item_id": "1580710512551583745",
                            "name": "2022.10.14考勤",
                            "type": "1",
                            "score": 1,
                            "start_time": "2022-10-14T08:01:50",
                            "due_time": "2022-10-14T08:11:50",
                            "attend_time": "2022-10-14T08:02:41",
                            "attend_status": "1"    /* 0: Absence / 1: Attendance / 2: Leave */
                        }, 
                        {"...": "..."}
                    ]
                }, 
                {"...": "..."}
            ]
        }, 
        {"...": "..."}
    ]
}
```

The detail statistics in *SHUISHAN-CLAD*.

|      course_id      | teachclass<br>count | video<br>records | exam<br>records | homework<br>records | student<br>records | attendance<br>records |
|:-------------------:|:-------------------:|:----------------:|:---------------:|:-------------------:|:------------------:|:---------------------:|
| 1298575975717560321 |        3         |       0       |      45      |        1         |       116       |         29         |
| 1302802345800785921 |        1         |       0       |      0       |        0         |        0        |         0          |
| 1303520016888520706 |        6         |      525      |      39      |       865        |       3811      |         66         |
| 1304072961111646210 |        6         |      6316     |     126      |        0         |       2518      |         0          |
| 1331957949140066306 |        2         |       0       |      0       |        0         |        14       |         0          |
| 1363687504452022273 |        17        |      2019     |     524      |        0         |      12502      |        320         |
| 1363741354588401666 |        17        |      2495     |     250      |        0         |       2808      |        169         |
| 1363741691663642626 |        1         |       0       |      0       |        0         |        38       |         33         |
| 1364202602933284866 |        24        |      7419     |      15      |        0         |      11797      |         0          |
| 1367024306155974658 |        3         |       0       |      50      |        14        |       275       |         0          |
| 1373810612282355714 |        1         |      933      |     195      |        0         |       440       |         0          |
| 1410836576014098433 |        3         |       1       |      0       |        0         |        10       |         0          |
| 1432245066232434690 |        1         |       28      |      0       |        0         |        10       |         0          |
| 1432280901640196098 |        42        |     16006     |     3002     |       2179       |      24863      |        1065        |
| 1432511598644629505 |        8         |     52402     |     2174     |       1873       |      55380      |         37         |
| 1432867302497370114 |        19        |     18298     |     1691     |       6137       |      25070      |        839         |
| 1433254253137207298 |        3         |       0       |      0       |        0         |        6        |         0          |
| 1433339804224667649 |        2         |      629      |      61      |        87        |       552       |         0          |
| 1434752872612864001 |        3         |       0       |      0       |       217        |        41       |         0          |
| 1439397652077535234 |        2         |      391      |     141      |        1         |       339       |         0          |
| 1440493723562717186 |        1         |      100      |      0       |        0         |       512       |         0          |
| 1440496025543553025 |        3         |     21988     |      0       |        0         |      21670      |         0          |
| 1440497566092009474 |        1         |       0       |      0       |        0         |        5        |         0          |
| 1441386725335207937 |        1         |      123      |      0       |        0         |        35       |         0          |
| 1493759197977325569 |        25        |      3299     |     2374     |       5493       |       9758      |        729         |
| 1495593035371565057 |        6         |       0       |      0       |       1901       |       591       |         72         |
| 1495616262370152449 |        3         |       0       |      21      |       1102       |       1584      |         78         |
| 1495987276187086850 |        1         |       4       |      6       |        0         |        4        |         10         |
| 1495987488651296769 |        1         |       21      |      55      |        0         |        20       |         77         |
| 1496860477757181954 |        2         |      174      |      0       |        23        |        51       |         0          |
| 1503287757225766914 |        1         |       0       |      14      |        27        |        1        |         20         |
| 1504666069428649985 |        7         |       0       |      0       |        0         |        1        |         56         |
| 1507244127782178817 |        1         |       0       |      0       |        0         |        0        |         0          |
| 1507922820953452546 |        1         |       0       |     158      |        0         |        1        |         0          |
| 1512362402298114050 |        3         |      6479     |      0       |        0         |       2795      |         0          |
| 1526367730301186049 |        1         |       0       |      0       |        0         |        2        |         0          |
| 1542014615012753410 |        1         |       0       |      0       |        0         |        6        |         0          |
| 1549936199112511489 |        1         |      322      |      0       |        0         |       459       |         0          |
| 1565728402490331138 |        2         |      1946     |      0       |       891        |       1881      |         0          |
| 1567519569358557185 |        1         |       0       |      45      |        0         |        0        |         23         |
| 1567537214814949378 |        1         |       0       |      0       |        12        |        0        |         57         |
| 1568116453675110401 |        14        |       0       |     107      |        0         |       128       |        381         |
| 1569130547979730945 |        3         |      174      |      0       |        0         |       832       |         0          |
| 1569939801728987137 |        7         |       0       |      0       |        0         |        0        |        118         |
| 1573586148282273793 |        2         |      112      |      0       |       216        |       461       |         0          |
| 1578364033370279937 |        3         |      330      |     248      |       808        |       2292      |         53         |
| 1578976605712584706 |        2         |       57      |     187      |       158        |       488       |         65         |
| 1585822157508653058 |        1         |       0       |      0       |       119        |        2        |         0          |
| 1594496772118843393 |        4         |       0       |      0       |        85        |       111       |         47         |
| 1601242306607902722 |        2         |       0       |      0       |        0         |        0        |         1          |
| 1603586586984308737 |        2         |       46      |      0       |       2441       |       4604      |         0          |
| 1603666380533972994 |        1         |       0       |      0       |        0         |        6        |         0          |
| 1628931929197314049 |        2         |       0       |      0       |        0         |       538       |         0          |
| 1630037388622487554 |        1         |       0       |      0       |        5         |        0        |         0          |
| 1630199040938319873 |        2         |      341      |      0       |        0         |       846       |         0          |
| 1630397559672594433 |        2         |       34      |      0       |        0         |       441       |         0          |
| 1632719566492352513 |        1         |       0       |      0       |        48        |        1        |         15         |
| 1646699780944232450 |        1         |      427      |      31      |        8         |       210       |         0          |
| 1663761129709588481 |        1         |       9       |      7       |        0         |        32       |         0          |
| 1663761255558115329 |        1         |       19      |      4       |        0         |        47       |         0          |
| 1701101273419804674 |        1         |       0       |      0       |       151        |       535       |         0          |
| 1701813592898596866 |        1         |       0       |      0       |        0         |        0        |         0          |
| 1702499299719835650 |        1         |       0       |      0       |        0         |        0        |         0          |
| 1702598872236748802 |        2         |       0       |      0       |        0         |        0        |         0          |
| 1704780130139205634 |        1         |       0       |      0       |        0         |        38       |         0          |
| 1704852334755790850 |        2         |       0       |      0       |       2091       |       1340      |        117         |
| 1706156080152526850 |        2         |       0       |     669      |       993        |       3254      |         72         |
| 1723874651148795905 |        1         |       55      |      0       |        0         |        35       |         0          |
| 1735231539287310338 |        1         |       0       |      83      |        70        |       366       |         49         |
| 1748563588466839554 |        1         |       0       |      0       |        0         |        8        |         0          |
| 1748564129087459330 |        1         |       0       |      0       |        0         |        9        |         0          |
| 1750318521577603074 |        1         |       0       |      0       |        0         |       489       |         0          |
| 1761732976770576386 |        3         |      255      |      0       |        0         |       955       |        175         |
| 1761733753753067522 |        2         |      342      |     703      |       156        |       2230      |        139         |
| 1761914978220400642 |        1         |       0       |      0       |       236        |       776       |         0          |
| 1761915542131990530 |        1         |       0       |      0       |        0         |       263       |         0          |
| 1761940187811704833 |        2         |      225      |     135      |       400        |       2140      |         73         |
| 1763025375593783298 |        1         |       0       |      0       |        0         |        0        |         0          |
| 1764641076137975810 |        2         |       0       |      0       |       4678       |       1190      |        126         |
| **Total Count: 79** |     **307**      |  **144344**   |  **13160**   |    **33486**     |   **204633**    |     **5111**       |

## Contact Us
If you are interested in using our dataset, please [contact us via email(51265903105@stu.ecnu.edu.cn)](mailto:51265903105@stu.ecnu.edu.cn) to obtain the necessary authorization. Additionally, we would appreciate it if you could acknowledge the contribution of this dataset in the acknowledgment section of your paper.