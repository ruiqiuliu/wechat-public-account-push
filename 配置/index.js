export const config = {
    /**
     {
# 公众号配置
# 公众号appId
"app_id": "wx0e4eff2b912c47f7",
# 公众号appSecret
"app_secret": "a38460eaa3e6999114f44a1abc10b22e",
# 模板消息id
"template_id": "9p8vLJZ28PQfij_bLg1oU-TTBEJxpih-IQiAK5hovJo",
# 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
"user": ["obVdg6VY1KpqdDF3jQqzCqBTBGNA","obVdg6Zn14exLlDcFfT3QH2M2mBc"],

# 信息配置
# 和风天气apikey
"weather_key": "fbfce26b247c4605b50459f6ab2dfbcf",
# 天行数据apikey
"tian_api": "f58cb0a59e49acff600ef9ce4c852846",
# 所在地区，可为省，城市，区，县，同时支持国外城市，例如伦敦(国外城市可能获取不到pm2.5，空气质量，今日建议等数据)
"region": "广州市",
# 生日1
"birthday1": {"name": "小宝宝", "birthday": "1993-06-08"},
# 生日2
#"birthday2": {"name": "小宝宝", "birthday": "1997-01-01"},
# 在一起的日子，格式同上
"love_date": "2021-05-29",
# 金句中文，如果为空，默认会读取金山的每日金句
"note_ch": "",
# 金句英文
"note_en": ""
}



    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}

// 共推送 {{need_post_num.DATA}}  人
// 成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
// 成功用户: {{success_post_ids.DATA}}
// 失败用户: {{fail_post_ids.DATA}}
