# SHUISHAN DATASETS
[![LICENSE](https://img.shields.io/badge/license-MIT-green)](https://github.com/TommySoya/shuishan-datasets/blob/master/LICENSE)

Open-sourced Dataset(s) from the [Shuishan(Sequoia) eLearning platform](https://www.shuishan.net.cn/)

一个基于[水杉在线学习平台](https://www.shuishan.net.cn/)的开源数据集库

## Intro.
This repo. is aimed to publicise our datasets collected from the Shuishan(Sequoia) eLearning platform, you can download and use it for your study. All of them are desensitized and easily used, which covers course resources, student behaviour and other data.

这个仓库用于公开我们从水杉在线学习平台收集的数据集，您可以下载并使用它们进行您的研究。所有数据集均对特殊字段进行了脱敏（所以如果您想进行特定人群的研究，这份数据集可能并不适合您），涵盖课程资源、学生行为以及其它数据。

## Dataests
Here is a list of datasets we have collected. (But there is only one dataset now~)
以下是我们目前公开的数据集（暂时只有SHUISHAN-CLAD）

 - [SHUISHAN-CLAD: Course Learning Action Dataset](#1.SHUISHAN-CLAD:CourseLearningActionDataset)
 - ...
 <!-- - [...](#Download-the-Data) -->

## Download the Data

We provide several options to download our dataset:

我们提供了以下多种下载方式：

**Option 1.** Download via the `wget` command.

```shell
wget https://shuishan-dataset.oss-accelerate.aliyuncs.com/SHUISHAN-CLAD.zip --no-check-certificate
unzip SHUISHAN-CLAD.zip
```

**Option 2.** Download manually through the following links:

 - Optional link 1: [Google Drive](https://drive.google.com/file/d/1C6mYu21SU0Z8PFJcNbqOILcQImvmp5LC/view?usp=sharing)
 - Optional link 2: [Baidu Disk](https://pan.baidu.com/s/1Pbx0u0x2UV0-a9pO8tHtlw?pwd=l9yr)
   - link: https://pan.baidu.com/s/1Pbx0u0x2UV0-a9pO8tHtlw
   - password: l9yr
 - Optional link 3: [Aliyun OSS](https://shuishan-dataset.oss-accelerate.aliyuncs.com/SHUISHAN-CLAD.zip)

 We highly recommend you download the data via the `wget` command or the Aliyun OSS link, because it is usually the most up-to-date version.

 我们强烈推荐您使用`wget`命令或者阿里云OSS链接进行下载，因为它通常是最新的（云盘下载链接可能很久不会更新）。


## Data Descriptions

### 1. SHUISHAN-CLAD: Course Learning Action Dataset

This dataset contains 659,000+ records of course learning actions, including student learning activities, such as watching videos, reading articles, and completing exercises. The dataset is collected from 91 courses, and the data is collected from 17485 students.

这个数据集包含了超过 65.9 万条课程学习行为记录，包括学生学习活动，例如观看视频、阅读文章和完成练习。数据集是从 91 门课程中收集，涵盖 17485 名不同学生的行为数据。

The `json` files are in the following format:

我们的数据以`json`格式存储，具体字段及含义见下文：

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
    "resources": [
        {
            "resource_id": "1367457685162717186",
            "resource_type": "作业",  /* 作业, 视频, 课件, 实训, 测验... */
            "teaching_week": 1,
            "period": 0,
            "owner_id": "1297355160548302850",
            "download_times": 0,
            "view_times": 0,
            "create_time": "2021-03-04T20:51:32",
            "update_time": "2021-09-22T22:22:47"
        },
        {"...": "..."}
    ], 
    "teachclasses": [
        {
            "teachclass_id": "10000001", 
            "teacher_name": "李四", 
            "term": "2022-20231", 
            "start_date": "2020/02/24 00:00:00",    /* term start time */ 
            "finish_date": "2020/06/30 00:00:00",   /* term start time */ 
            "teacher_id": "13720181912", 
            "assistant_id": "1569260691612483585,1372731764832759810,1303989005536223234,1597863528202371073,1367464835498930178", 
            "students": [
                {
                    "student_id": "21723851905", 
                    "student_username": "512629102759", 
                    "student_truename": "王五", 
                    "gender": "0"   /* 1: male / 2: female */, 
                    "phone": "13312345678", 
                    "mail": "101@stu.ecnu.edu.cn", 
                    "major": "23级英语", 
                    "company_id": "000000", 
                    "course_final_score": 100,  /* gt */
                    "first_class_score": 100, 
                    "login_times": 33,
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
                            "attend_status": "出勤"    /* 出勤, 缺勤, 请假, 未知 */
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
|               计算教育学2022               |        1         |       0       |      14      |        27        |        1        |        140         |
|              数据分析与大数据              |        18        |      2495     |     250      |        0         |       2809      |        1704        |
|           计算机科学中的伟大思想           |        2         |       0       |      43      |        3         |       160       |        207         |
|     编程思维与实践（理科组）（刘小平）     |        3         |      129      |      0       |        0         |       663       |        1243        |
|             (B2)编程思维与实践             |        22        |       0       |     113      |        0         |       151       |        2609        |
|          编程思维与实践（艺术类）          |        6         |       0       |      0       |       5851       |       2595      |        2313        |
|              大数据与人工智能              |        1         |       0       |      0       |        12        |        0        |        171         |
|                应用编程实践                |        1         |       0       |      30      |        43        |       438       |        620         |
|             信息系统与数字社会             |        1         |       11      |      15      |        0         |        47       |         0          |
|        开源软件设计与开发（本科生）        |        1         |       4       |      6       |        0         |        4        |         20         |
|                 计算机视觉                 |        1         |       0       |      0       |        0         |        0        |         0          |
|            人工智能基础与应用A             |        23        |      7555     |     870      |        0         |      15740      |        7536        |
|               分布式计算系统               |        3         |     25398     |      0       |        0         |      21325      |         0          |
|         计算机视觉与多媒体信息处理         |        5         |      6484     |      0       |        0         |       3767      |         0          |
|             事业启航-数据学院              |        2         |       42      |      0       |        0         |       613       |         0          |
|                  程序设计                  |        9         |      6382     |     127      |        0         |       2742      |         0          |
|           计算机网络（拔尖基地）           |        1         |       0       |      0       |       151        |       535       |         0          |
|     Metasequoia Cup Coding Competition     |        4         |       0       |      0       |        0         |        0        |         0          |
|              当代数据管理系统              |        9         |     62107     |     2678     |       2333       |      61542      |         36         |
|                  水杉公益                  |        1         |       0       |      0       |        0         |        0        |         0          |
|              概率论与数理统计              |        2         |       46      |      0       |       2646       |       5808      |         0          |
|         程序设计（计算机拔尖基地）         |        4         |      424      |     413      |       1592       |       4073      |        1664        |
|              学术英语读写课程              |        1         |       3       |     100      |        0         |       275       |         0          |
|             数字媒体与交互设计             |        8         |       0       |      0       |        0         |        3        |        771         |
|                  算法基础                  |        1         |       0       |      0       |        0         |        0        |         0          |
|               数据思维与实践               |        1         |      963      |      0       |        0         |       364       |         0          |
|                 云计算系统                 |        1         |       0       |      0       |        0         |        0        |         0          |
|           数据学院2022年双创展示           |        1         |       0       |      0       |        0         |        2        |         0          |
|            高性能计算与并行计算            |        1         |       0       |      0       |        45        |        1        |         42         |
|              云计算应用与开发              |        2         |       0       |      0       |        0         |        14       |         0          |
|                计算机通识课                |        1         |      427      |      31      |        8         |       210       |         0          |
|         人工智能基础与应用A-朱晴婷         |        4         |      280      |      0       |        0         |       1120      |        2381        |
|              开源软件通识基础              |        1         |       28      |      0       |        0         |        10       |         0          |
|          编程思维与实践（理科组）          |        56        |     32089     |     3738     |       2201       |      37680      |       11538        |
|                  事业启航                  |        2         |      174      |      0       |        23        |        51       |         0          |
|           数据科学与工程数学基础           |        1         |      123      |      0       |        0         |        35       |         0          |
|         人工智能基础与应用A-陈优广         |        2         |      1098     |     1169     |       547        |       3967      |        1306        |
|        数字媒体与交互设计（艺术类）        |        2         |      672      |      0       |       6355       |       1940      |        1617        |
|             数据科学与工程基础             |        25        |      5811     |     3643     |       6189       |      16487      |        6375        |
|               Python编程基础               |        3         |       0       |     883      |       1678       |       5645      |        2837        |
|      开源软件开发与社区治理（研究生）      |        1         |       21      |      55      |        0         |        20       |        924         |
|                  数字素养                  |        1         |       3       |      0       |        0         |        1        |         83         |
|             软件系统优化2021秋             |        3         |       0       |      0       |        0         |        6        |         0          |
|           程序优化系统设计（上）           |        1         |       4       |      0       |        0         |        52       |         0          |
|          多媒体技术与应用（HA&M）          |        5         |       0       |     206      |       1904       |       2935      |        831         |
|                  数据伦理                  |        6         |       0       |      0       |       1975       |       755       |        213         |
|     编程思维与实践（理科组）（陈优广）     |        2         |      325      |     283      |       258        |       1507      |        1250        |
|              机器学习（2024）              |        1         |       0       |      0       |        0         |        0        |        684         |
|           编程思维与实践（2021）           |        4         |      1038     |      9       |        0         |       389       |         0          |
|            青少年编程教育训练营            |        5         |       0       |      0       |        56        |       233       |        295         |
|               网络与数字安全               |        1         |       0       |      8       |        0         |        21       |         0          |
|            数据结构（拔尖基地）            |        2         |       0       |      0       |        0         |       910       |         0          |
|                  编译原理                  |        1         |       0       |      0       |        0         |       673       |         0          |
|         编程思维与实践（体育学院）         |        2         |       0       |      86      |       1077       |       1975      |        303         |
|           数据思维与实践（2024）           |        2         |       57      |     187      |       158        |       498       |        248         |
|                 数据与编程                 |        1         |       28      |      10      |        0         |        80       |         0          |
|             Python语言程序设计             |        1         |       0       |      1       |        0         |        1        |         0          |
|                  web编程                   |        2         |       0       |      0       |       833        |       4004      |        612         |
|       人工智能基础与应用A(暑期实训)        |        2         |      333      |     269      |       593        |       3422      |        1984        |
|           数据科学与工程专题选讲           |        1         |       0       |      0       |        0         |        0        |         0          |
|               编程思维与实践               |        31        |     26412     |     2055     |       9372       |      37215      |       11536        |
| 2022高校学生人工智能训练营(英特尔-华师大） |        1         |       0       |      0       |       119        |        2        |         0          |
|                 计算机系统                 |        4         |       0       |      0       |       217        |       686       |         0          |
|                  专业英语                  |        1         |       0       |      0       |       244        |       558       |         0          |
|             统计方法与机器学习             |        3         |      1946     |      0       |       1305       |       4089      |         0          |
|          2022“人工智能”教学研讨班          |        1         |      322      |      0       |        0         |       459       |         0          |
|             计算机视觉（2024）             |        1         |       0       |      0       |        0         |        0        |         0          |
|                 区块链系统                 |        1         |       0       |      0       |        0         |        5        |         0          |
|           统计与机器学习（非全）           |        3         |      112      |      0       |       388        |       1213      |         0          |
|             2022年人工智能初探             |        2         |      630      |      61      |        87        |       556       |         0          |
|                软件系统优化                |        5         |      176      |      0       |       725        |       2251      |         0          |
|             软件开发管理与实践             |        1         |       0       |      0       |        5         |        0        |         0          |
|                  机器学习                  |        2         |       0       |      0       |        0         |        0        |         0          |
|                人工智能初探                |        2         |      393      |     141      |        1         |       339       |         0          |
|        人工智能基础(上海市重点课程)        |        3         |      358      |     185      |       149        |       1579      |        524         |
|                  设计思维                  |        1         |       0       |      0       |        0         |        6        |         0          |
|           数据科学与工程算法基础           |        1         |      100      |      0       |        0         |       512       |         0          |
|                  数据挖掘                  |        1         |       0       |      0       |       335        |       956       |         0          |
|                数据系统前沿                |        1         |       0       |      0       |        0         |        4        |         0          |
|          编程思维与实践（微专业）          |        1         |       51      |      0       |        0         |        48       |         0          |
|           计算机文化与数字胜任力           |        4         |       0       |      50      |        0         |      54481      |         0          |
|             人工智能基础与应用             |        26        |      8079     |      37      |        0         |      12186      |         0          |
|               计算机编程语言               |        1         |       0       |      45      |        0         |        0        |        115         |
|                  社会计算                  |        3         |       0       |      50      |        55        |       383       |         0          |
|                当代人工智能                |        1         |       0       |     158      |        0         |        1        |         0          |
|         计算机与程序设计基础（D）          |        7         |       0       |      0       |        0         |        0        |        118         |
|           计算机系统（拔尖基地）           |        2         |      345      |      0       |        0         |       1261      |         0          |
|               算法与人工智能               |        1         |       0       |      12      |        0         |        44       |         0          |
|             数据科学与工程导论             |        6         |      525      |      39      |       865        |       3884      |        129         |
|             neXt-lab的机器学习             |        1         |       0       |      0       |        0         |        74       |         17         |
|    编程思维与实践（下）——探索数据的世界    |        1         |       0       |      0       |        0         |        38       |        461         |
|              Total Count: 91               |       396        |     194003    |    18070     |      50425       |      331129     |       65457        |
students: , records: 659084

## Contact Us
If you are interested in using our dataset, please [contact us via email(51265903105@stu.ecnu.edu.cn)](mailto:51265903105@stu.ecnu.edu.cn) to obtain the necessary authorization. Additionally, we would appreciate it if you could acknowledge the contribution of this dataset in the acknowledgment section of your paper.

如果您需要使用我们的数据集进行研究，请通过电子邮件（51265903105@stu.ecnu.edu.cn）联系我们以获取必要的授权。此外，如果您在论文的致谢部分提到我们的贡献，我们将不胜感激。

If you have any questions or suggestions, please also contact us via email or GitHub issue.

如果您有任何疑问或建议，也请通过邮件或者GitHub issue的方式联系我们。
