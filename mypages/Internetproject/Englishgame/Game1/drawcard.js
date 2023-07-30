const card = [
    { id: 1, name: 'cat', cname: '貓', point: 3 },
    { id: 2, name: 'dog', cname: '狗', point: 3 },
    { id: 3, name: 'apple', cname: '蘋果', point: 5 },
    { id: 4, name: 'elephant', cname: '大象', point: 8 },
    { id: 5, name: 'corn', cname: '玉米', point: 4 },
    { id: 6, name: 'popcorn', cname: '爆米花', point: 7 },
    { id: 7, name: 'abundant', cname: '豐富的', point: 8 },
    { id: 8, name: 'accurate', cname: '準確的', point: 8 },
    { id: 9, name: 'advertising', cname: '廣告', point: 11 },
    { id: 10, name: 'agreement', cname: '協議', point: 9 },
    { id: 11, name: 'analyze', cname: '分析', point: 7 },
    { id: 12, name: 'applicant', cname: '申請者', point: 9 },
    { id: 13, name: 'appointment', cname: '約會', point: 10 },
    { id: 14, name: 'approve', cname: '批准', point: 7 },
    { id: 15, name: 'arrival', cname: '到達', point: 7 },
    { id: 16, name: 'assign', cname: '分配', point: 6 },
    { id: 17, name: 'assistant', cname: '助理', point: 9 },
    { id: 18, name: 'attendance', cname: '出席', point: 10 },
    { id: 19, name: 'authority', cname: '權威', point: 9 },
    { id: 20, name: 'availability', cname: '可用性', point: 12 },
    { id: 21, name: 'benefit', cname: '好處', point: 7 },
    { id: 22, name: 'brief', cname: '簡短的', point: 5 },
    { id: 23, name: 'budget', cname: '預算', point: 6 },
    { id: 24, name: 'candidate', cname: '候選人', point: 9 },
    { id: 25, name: 'career', cname: '事業', point: 6 },
    { id: 26, name: 'category', cname: '類別', point: 8 },
    { id: 27, name: 'challenge', cname: '挑戰', point: 9 },
    { id: 28, name: 'change', cname: '變化', point: 6 },
    { id: 29, name: 'circumstance', cname: '情況', point: 12 },
    { id: 30, name: 'claim', cname: '要求', point: 5 },
    { id: 31, name: 'client', cname: '客戶', point: 6 },
    { id: 32, name: 'colleague', cname: '同事', point: 9 },
    { id: 33, name: 'comfortable', cname: '舒適的', point: 11 },
    { id: 34, name: 'communicate', cname: '溝通', point: 11 },
    { id: 35, name: 'compare', cname: '比較', point: 7 },
    { id: 36, name: 'complaint', cname: '抱怨', point: 9 },
    { id: 37, name: 'complete', cname: '完成', point: 8 },
    { id: 38, name: 'concern', cname: '關注', point: 7 },
    { id: 39, name: 'conference', cname: '會議', point: 10 },
    { id: 40, name: 'confirm', cname: '確認', point: 7 },
    { id: 41, name: 'congratulate', cname: '祝賀', point: 12 },
    { id: 42, name: 'consider', cname: '考慮', point: 8 },
    { id: 43, name: 'contact', cname: '聯繫', point: 7 },
    { id: 44, name: 'contribute', cname: '貢獻', point: 10 },
    { id: 45, name: 'convince', cname: '說服', point: 8 },
    { id: 46, name: 'cooperate', cname: '合作', point: 9 },
    { id: 47, name: 'coordinate', cname: '協調', point: 10 },
    { id: 48, name: 'correspond', cname: '相應', point: 10 },
    { id: 49, name: 'create', cname: '創造', point: 6 },
    { id: 50, name: 'criticize', cname: '批評', point: 9 },
    { id: 51, name: 'customer', cname: '顧客', point: 8 },
    { id: 52, name: 'deadline', cname: '截止日期', point: 8 },
    { id: 53, name: 'decide', cname: '決定', point: 6 },
    { id: 54, name: 'decline', cname: '下降', point: 7 },
    { id: 55, name: 'deliver', cname: '交付', point: 7 },
    { id: 56, name: 'demand', cname: '需求', point: 6 },
    { id: 57, name: 'department', cname: '部門', point: 10 },
    { id: 58, name: 'depend', cname: '依賴', point: 6 },
    { id: 59, name: 'describe', cname: '描述', point: 8 },
    { id: 60, name: 'design', cname: '設計', point: 6 },
    { id: 61, name: 'develop', cname: '開發', point: 7 },
    { id: 62, name: 'difference', cname: '差異', point: 10 },
    { id: 63, name: 'difficult', cname: '困難的', point: 9 },
    { id: 64, name: 'direction', cname: '方向', point: 9 },
    { id: 65, name: 'discuss', cname: '討論', point: 7 },
    { id: 66, name: 'distribute', cname: '分發', point: 10 },
    { id: 67, name: 'document', cname: '文件', point: 8 },
    { id: 68, name: 'economy', cname: '經濟', point: 7 },
    { id: 69, name: 'effect', cname: '效果', point: 6 },
    { id: 70, name: 'efficient', cname: '高效的', point: 9 },
    { id: 71, name: 'election', cname: '選舉', point: 8 },
    { id: 72, name: 'encourage', cname: '鼓勵', point: 9 },
    { id: 73, name: 'enjoy', cname: '享受', point: 5 },
    { id: 74, name: 'ensure', cname: '確保', point: 6 },
    { id: 75, name: 'enthusiasm', cname: '熱情', point: 11 },
    { id: 76, name: 'establish', cname: '建立', point: 9 },
    { id: 77, name: 'evaluate', cname: '評估', point: 8 },
    { id: 78, name: 'event', cname: '事件', point: 5 },
    { id: 79, name: 'examine', cname: '檢查', point: 7 },
    { id: 80, name: 'excellent', cname: '優秀的', point: 9 },
    { id: 81, name: 'exciting', cname: '令人興奮的', point: 8 },
    { id: 82, name: 'experience', cname: '經驗', point: 10 },
    { id: 83, name: 'expert', cname: '專家', point: 6 },
    { id: 84, name: 'explain', cname: '解釋', point: 7 },
    { id: 85, name: 'express', cname: '表達', point: 7 },
    { id: 86, name: 'extend', cname: '延長', point: 6 },
    { id: 87, name: 'facility', cname: '設施', point: 8 },
    { id: 88, name: 'factor', cname: '因素', point: 6 },
    { id: 89, name: 'finance', cname: '財務', point: 7 },
    { id: 90, name: 'follow', cname: '遵循', point: 6 },
    { id: 91, name: 'force', cname: '力量', point: 5 },
    { id: 92, name: 'formal', cname: '正式的', point: 6 },
    { id: 93, name: 'function', cname: '功能', point: 8 },
    { id: 94, name: 'generate', cname: '產生', point: 8 },
    { id: 95, name: 'global', cname: '全球的', point: 6 },
    { id: 96, name: 'gradual', cname: '逐漸的', point: 7 },
    { id: 97, name: 'guarantee', cname: '保證', point: 9 },
    { id: 98, name: 'handle', cname: '處理', point: 6 },
    { id: 99, name: 'happen', cname: '發生', point: 6 },
    { id: 100, name: 'hazard', cname: '危險', point: 6 },
    { id: 101, name: 'identify', cname: '識別', point: 9 },
{ id: 102, name: 'ignore', cname: '忽略', point: 6 },
{ id: 103, name: 'immediate', cname: '立即的', point: 9 },
{ id: 104, name: 'implement', cname: '實施', point: 9 },
{ id: 105, name: 'improve', cname: '改善', point: 7 },
{ id: 106, name: 'include', cname: '包括', point: 7 },
{ id: 107, name: 'increase', cname: '增加', point: 8 },
{ id: 108, name: 'influence', cname: '影響', point: 9 },
{ id: 109, name: 'information', cname: '信息', point: 11 },
{ id: 110, name: 'initiate', cname: '發起', point: 8 },
{ id: 111, name: 'innovative', cname: '創新的', point: 11 },
{ id: 112, name: 'inspire', cname: '激勵', point: 7 },
{ id: 113, name: 'integrate', cname: '整合', point: 9 },
{ id: 114, name: 'introduce', cname: '介紹', point: 8 },
{ id: 115, name: 'investigate', cname: '調查', point: 11 },
{ id: 116, name: 'issue', cname: '問題', point: 5 },
{ id: 117, name: 'knowledge', cname: '知識', point: 9 },
{ id: 118, name: 'launch', cname: '發射', point: 6 },
{ id: 119, name: 'leadership', cname: '領導', point: 10 },
{ id: 120, name: 'maintain', cname: '維護', point: 8 },
{ id: 121, name: 'manage', cname: '管理', point: 6 },
{ id: 122, name: 'market', cname: '市場', point: 6 },
{ id: 123, name: 'measurement', cname: '測量', point: 11 },
{ id: 124, name: 'meeting', cname: '會議', point: 7 },
{ id: 125, name: 'merge', cname: '合併', point: 6 },
{ id: 126, name: 'motivate', cname: '激勵', point: 8 },
{ id: 127, name: 'negotiate', cname: '談判', point: 9 },
{ id: 128, name: 'objective', cname: '客觀的', point: 9 },
{ id: 129, name: 'observe', cname: '觀察', point: 7 },
{ id: 130, name: 'operate', cname: '操作', point: 7 },
{ id: 131, name: 'opportunity', cname: '機會', point: 11 },
{ id: 132, name: 'organize', cname: '組織', point: 8 },
{ id: 133, name: 'outcome', cname: '結果', point: 7 },
{ id: 134, name: 'participate', cname: '參與', point: 11 },
{ id: 135, name: 'performance', cname: '表現', point: 11 },
{ id: 136, name: 'persuade', cname: '說服', point: 8 },
{ id: 137, name: 'plan', cname: '計劃', point: 4 },
{ id: 138, name: 'policy', cname: '政策', point: 6 },
{ id: 139, name: 'position', cname: '職位', point: 8 },
{ id: 140, name: 'potential', cname: '潛力', point: 9 },
{ id: 141, name: 'practice', cname: '實踐', point: 7 },
{ id: 142, name: 'preparation', cname: '準備', point: 11 },
{ id: 143, name: 'priority', cname: '優先', point: 8 },
{ id: 144, name: 'problem', cname: '問題', point: 7 },
{ id: 145, name: 'process', cname: '過程', point: 7 },
{ id: 146, name: 'produce', cname: '生產', point: 7 },
{ id: 147, name: 'profit', cname: '利潤', point: 6 },
{ id: 148, name: 'project', cname: '項目', point: 7 },
{ id: 149, name: 'promote', cname: '促進', point: 7 },
{ id: 150, name: 'proposal', cname: '提案', point: 8 },
{ id: 151, name: 'protect', cname: '保護', point: 7 },
{ id: 152, name: 'provide', cname: '提供', point: 7 },
{ id: 153, name: 'publish', cname: '發布', point: 7 },
{ id: 154, name: 'purchase', cname: '購買', point: 7 },
{ id: 155, name: 'quality', cname: '質量', point: 7 },
{ id: 156, name: 'recommend', cname: '推薦', point: 9 },
{ id: 157, name: 'record', cname: '記錄', point: 6 },
{ id: 158, name: 'recruit', cname: '招聘', point: 7 },
{ id: 159, name: 'reduce', cname: '減少', point: 6 },
{ id: 160, name: 'region', cname: '地區', point: 6 },
{ id: 161, name: 'relationship', cname: '關係', point: 11 },
{ id: 162, name: 'reliable', cname: '可靠的', point: 8 },
{ id: 163, name: 'represent', cname: '代表', point: 9 },
{ id: 164, name: 'research', cname: '研究', point: 8 },
{ id: 165, name: 'responsibility', cname: '責任', point: 12 },
{ id: 166, name: 'result', cname: '結果', point: 6 },
{ id: 167, name: 'review', cname: '評論', point: 6 },
{ id: 168, name: 'schedule', cname: '日程表', point: 8 },
{ id: 169, name: 'selection', cname: '選擇', point: 9 },
{ id: 170, name: 'service', cname: '服務', point: 7 },
{ id: 171, name: 'skill', cname: '技能', point: 5 },
{ id: 172, name: 'solution', cname: '解決方案', point: 9 },
{ id: 173, name: 'staff', cname: '員工', point: 5 },
{ id: 174, name: 'strategy', cname: '策略', point: 8 },
{ id: 175, name: 'study', cname: '學習', point: 5 },
{ id: 176, name: 'successful', cname: '成功的', point: 9 },
{ id: 177, name: 'suggestion', cname: '建議', point: 9 },
{ id: 178, name: 'support', cname: '支持', point: 7 },
{ id: 179, name: 'survey', cname: '調查', point: 6 },
{ id: 180, name: 'system', cname: '系統', point: 5 },
{ id: 181, name: 'task', cname: '任務', point: 5 },
{ id: 182, name: 'team', cname: '團隊', point: 5 },
{ id: 183, name: 'technology', cname: '技術', point: 8 },
{ id: 184, name: 'tendency', cname: '趨勢', point: 9 },
{ id: 185, name: 'theory', cname: '理論', point: 7 },
{ id: 186, name: 'train', cname: '訓練', point: 5 },
{ id: 187, name: 'transfer', cname: '轉移', point: 8 },
{ id: 188, name: 'transition', cname: '過渡', point: 9 },
{ id: 189, name: 'travel', cname: '旅行', point: 6 },
{ id: 190, name: 'trend', cname: '趨勢', point: 5 },
{ id: 191, name: 'understand', cname: '理解', point: 10 },
{ id: 192, name: 'urge', cname: '催促', point: 6 },
{ id: 193, name: 'value', cname: '價值', point: 6 },
{ id: 194, name: 'variety', cname: '多樣性', point: 9 },
{ id: 195, name: 'vital', cname: '重要的', point: 7 },
{ id: 196, name: 'volume', cname: '體積', point: 6 },
{ id: 197, name: 'way', cname: '方式', point: 3 },
{ id: 198, name: 'weaken', cname: '削弱', point: 6 },
{ id: 199, name: 'welcome', cname: '歡迎', point: 7 },
{ id: 200, name: 'work', cname: '工作', point: 4 },
{ id: 201, name: 'achieve', cname: '實現', point: 7 },
{ id: 202, name: 'adapt', cname: '適應', point: 6 },
{ id: 203, name: 'advance', cname: '前進', point: 7 },
{ id: 204, name: 'analyze', cname: '分析', point: 8 },
{ id: 205, name: 'apply', cname: '應用', point: 5 },
{ id: 206, name: 'approach', cname: '方法', point: 8 },
{ id: 207, name: 'assess', cname: '評估', point: 6 },
{ id: 208, name: 'assist', cname: '協助', point: 6 },
{ id: 209, name: 'attract', cname: '吸引', point: 7 },
{ id: 210, name: 'benefit', cname: '利益', point: 7 },
{ id: 211, name: 'budget', cname: '預算', point: 6 },
{ id: 212, name: 'build', cname: '建立', point: 5 },
{ id: 213, name: 'calculate', cname: '計算', point: 9 },
{ id: 214, name: 'challenge', cname: '挑戰', point: 9 },
{ id: 215, name: 'change', cname: '變化', point: 6 },
{ id: 216, name: 'choose', cname: '選擇', point: 6 },
{ id: 217, name: 'clarify', cname: '澄清', point: 7 },
{ id: 218, name: 'collaborate', cname: '合作', point: 10 },
{ id: 219, name: 'collect', cname: '收集', point: 6 },
{ id: 220, name: 'communicate', cname: '溝通', point: 11 },
{ id: 221, name: 'compare', cname: '比較', point: 7 },
{ id: 222, name: 'compete', cname: '競爭', point: 7 },
{ id: 223, name: 'complete', cname: '完成', point: 8 },
{ id: 224, name: 'comply', cname: '遵守', point: 7 },
{ id: 225, name: 'compose', cname: '撰寫', point: 7 },
{ id: 226, name: 'compute', cname: '計算', point: 7 },
{ id: 227, name: 'concentrate', cname: '專注', point: 11 },
{ id: 228, name: 'concept', cname: '概念', point: 7 },
{ id: 229, name: 'conduct', cname: '進行', point: 8 },
{ id: 230, name: 'confirm', cname: '確認', point: 7 },
{ id: 231, name: 'connect', cname: '連接', point: 8 },
{ id: 232, name: 'consider', cname: '考慮', point: 8 },
{ id: 233, name: 'construct', cname: '建造', point: 8 },
{ id: 234, name: 'contribute', cname: '貢獻', point: 10 },
{ id: 235, name: 'control', cname: '控制', point: 7 },
{ id: 236, name: 'convince', cname: '說服', point: 9 },
{ id: 237, name: 'coordinate', cname: '協調', point: 9 },
{ id: 238, name: 'correspond', cname: '對應', point: 10 },
{ id: 239, name: 'create', cname: '創造', point: 6 },
{ id: 240, name: 'critique', cname: '批評', point: 9 },
{ id: 241, name: 'customize', cname: '定制', point: 9 },
{ id: 242, name: 'decide', cname: '決定', point: 6 },
{ id: 243, name: 'define', cname: '定義', point: 7 },
{ id: 244, name: 'delegate', cname: '委派', point: 9 },
{ id: 245, name: 'deliver', cname: '交付', point: 7 },
{ id: 246, name: 'demonstrate', cname: '證明', point: 10 },
{ id: 247, name: 'depend', cname: '依賴', point: 6 },
{ id: 248, name: 'describe', cname: '描述', point: 7 },
{ id: 249, name: 'design', cname: '設計', point: 7 },
{ id: 250, name: 'develop', cname: '發展', point: 6 },
{ id: 251, name: 'diagnose', cname: '診斷', point: 9 },
{ id: 252, name: 'differentiate', cname: '區分', point: 11 },
{ id: 253, name: 'direct', cname: '指導', point: 6 },
{ id: 254, name: 'discuss', cname: '討論', point: 6 },
{ id: 255, name: 'document', cname: '記錄', point: 7 },
{ id: 256, name: 'earn', cname: '賺取', point: 6 },
{ id: 257, name: 'educate', cname: '教育', point: 7 },
{ id: 258, name: 'eliminate', cname: '消除', point: 9 },
{ id: 259, name: 'emphasize', cname: '強調', point: 9 },
{ id: 260, name: 'enable', cname: '使能', point: 6 },
{ id: 261, name: 'encourage', cname: '鼓勵', point: 9 },
{ id: 262, name: 'enhance', cname: '增強', point: 8 },
{ id: 263, name: 'establish', cname: '建立', point: 7 },
{ id: 264, name: 'evaluate', cname: '評估', point: 9 },
{ id: 265, name: 'examine', cname: '檢查', point: 8 },
{ id: 266, name: 'execute', cname: '執行', point: 8 },
{ id: 267, name: 'expand', cname: '擴展', point: 8 },
{ id: 268, name: 'explain', cname: '解釋', point: 6 },
{ id: 269, name: 'explore', cname: '探索', point: 8 },
{ id: 270, name: 'express', cname: '表達', point: 7 },
{ id: 271, name: 'extract', cname: '提取', point: 8 },
{ id: 272, name: 'facilitate', cname: '促進', point: 10 },
{ id: 273, name: 'focus', cname: '聚焦', point: 5 },
{ id: 274, name: 'forecast', cname: '預測', point: 9 },
{ id: 275, name: 'gather', cname: '收集', point: 6 },
{ id: 276, name: 'generate', cname: '生成', point: 7 },
{ id: 277, name: 'identify', cname: '識別', point: 7 },
{ id: 278, name: 'implement', cname: '實施', point: 9 },
{ id: 279, name: 'improve', cname: '改進', point: 7 },
{ id: 280, name: 'incorporate', cname: '融入', point: 10 },
{ id: 281, name: 'increase', cname: '增加', point: 7 },
{ id: 282, name: 'influence', cname: '影響', point: 8 },
{ id: 283, name: 'inform', cname: '通知', point: 6 },
{ id: 284, name: 'initiate', cname: '開始', point: 8 },
{ id: 285, name: 'innovate', cname: '創新', point: 9 },
{ id: 286, name: 'inspect', cname: '檢查', point: 8 },
{ id: 287, name: 'install', cname: '安裝', point: 7 },
{ id: 288, name: 'integrate', cname: '整合', point: 9 },
{ id: 289, name: 'interpret', cname: '解釋', point: 8 },
{ id: 290, name: 'introduce', cname: '介紹', point: 8 },
{ id: 291, name: 'investigate', cname: '調查', point: 10 },
{ id: 292, name: 'lead', cname: '領導', point: 6 },
{ id: 293, name: 'learn', cname: '學習', point: 5 },
{ id: 294, name: 'manage', cname: '管理', point: 6 },
{ id: 295, name: 'measure', cname: '測量', point: 7 },
{ id: 296, name: 'motivate', cname: '激勵', point: 9 },
{ id: 297, name: 'negotiate', cname: '談判', point: 10 },
{ id: 298, name: 'observe', cname: '觀察', point: 7 },
{ id: 299, name: 'obtain', cname: '獲得', point: 7 },
{ id: 300, name: 'operate', cname: '操作', point: 7 },
{ id: 301, name: 'optimize', cname: '優化', point: 8 },
{ id: 302, name: 'organize', cname: '組織', point: 8 },
{ id: 303, name: 'oversee', cname: '監督', point: 8 },
{ id: 304, name: 'participate', cname: '參與', point: 9 },
{ id: 305, name: 'perform', cname: '執行', point: 7 },
{ id: 306, name: 'plan', cname: '計劃', point: 5 },
{ id: 307, name: 'predict', cname: '預測', point: 8 },
{ id: 308, name: 'prepare', cname: '準備', point: 7 },
{ id: 309, name: 'present', cname: '呈現', point: 7 },
{ id: 310, name: 'prioritize', cname: '優先考慮', point: 11 },
{ id: 311, name: 'process', cname: '處理', point: 7 },
{ id: 312, name: 'produce', cname: '生產', point: 7 },
{ id: 313, name: 'program', cname: '編程', point: 7 },
{ id: 314, name: 'promote', cname: '促進', point: 8 },
{ id: 315, name: 'propose', cname: '提議', point: 8 },
{ id: 316, name: 'protect', cname: '保護', point: 8 },
{ id: 317, name: 'provide', cname: '提供', point: 7 },
{ id: 318, name: 'publish', cname: '發布', point: 7 },
{ id: 319, name: 'purchase', cname: '購買', point: 7 },
{ id: 320, name: 'question', cname: '問題', point: 6 },
{ id: 321, name: 'recommend', cname: '推薦', point: 9 },
{ id: 322, name: 'recruit', cname: '招募', point: 8 },
{ id: 323, name: 'reduce', cname: '減少', point: 7 },
{ id: 324, name: 'refine', cname: '精煉', point: 7 },
{ id: 325, name: 'refresh', cname: '刷新', point: 7 },
{ id: 326, name: 'register', cname: '註冊', point: 8 },
{ id: 327, name: 'regulate', cname: '調節', point: 8 },
{ id: 328, name: 'reinforce', cname: '加強', point: 9 },
{ id: 329, name: 'relocate', cname: '搬遷', point: 9 },
{ id: 330, name: 'remedy', cname: '矯正', point: 7 },
{ id: 331, name: 'report', cname: '報告', point: 7 },
{ id: 332, name: 'research', cname: '研究', point: 8 },
{ id: 333, name: 'resolve', cname: '解決', point: 7 },
{ id: 334, name: 'respond', cname: '回應', point: 7 },
{ id: 335, name: 'review', cname: '審查', point: 7 },
{ id: 336, name: 'revise', cname: '修改', point: 7 },
{ id: 337, name: 'schedule', cname: '安排', point: 7 },
{ id: 338, name: 'secure', cname: '保護', point: 8 },
{ id: 339, name: 'select', cname: '選擇', point: 7 },
{ id: 340, name: 'simplify', cname: '簡化', point: 9 },
{ id: 341, name: 'solve', cname: '解決', point: 6 },
{ id: 342, name: 'standardize', cname: '標準化', point: 11 },
{ id: 343, name: 'stimulate', cname: '刺激', point: 9 },
{ id: 344, name: 'streamline', cname: '精簡', point: 10 },
{ id: 345, name: 'strengthen', cname: '加強', point: 9 },
{ id: 346, name: 'study', cname: '研究', point: 6 },
{ id: 347, name: 'submit', cname: '提交', point: 7 },
{ id: 348, name: 'support', cname: '支持', point: 7 },
{ id: 349, name: 'survey', cname: '調查', point: 7 },
{ id: 350, name: 'synthesize', cname: '綜合', point: 10 },
{ id: 351, name: 'teach', cname: '教學', point: 6 },
{ id: 352, name: 'test', cname: '測試', point: 6 },
{ id: 353, name: 'train', cname: '培訓', point: 6 },
{ id: 354, name: 'translate', cname: '翻譯', point: 9 },
{ id: 355, name: 'update', cname: '更新', point: 7 },
{ id: 356, name: 'upgrade', cname: '升級', point: 8 },
{ id: 357, name: 'use', cname: '使用', point: 4 },
{ id: 358, name: 'validate', cname: '驗證', point: 9 },
{ id: 359, name: 'verify', cname: '驗證', point: 8 },
{ id: 360, name: 'write', cname: '撰寫', point: 5 }
];
var sum_point=0;
var a30=0,a50=0,a80=0,a150=0;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function shuffle(numbers) {
    for (let i = numbers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
}
    var question = "";
    var choice1="";
    var choice2="";
    var choice3="";
    var choice4="";
    var chosen = Math.floor(Math.random() * card.length);
    question = card[chosen].name + "\n";
    var numbers = [chosen];
    while (numbers.length < 4) {
        var randomNumber = getRandomInt(0, card.length - 1);
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    shuffle(numbers);
    choice1+= card[numbers[0]].cname + " ";
    choice2+= card[numbers[1]].cname + " ";
    choice3+= card[numbers[2]].cname + " ";
    choice4+= card[numbers[3]].cname + " ";
    document.getElementById("question").innerText = question;
    document.getElementById("ch1").innerText = choice1;
    document.getElementById("ch2").innerText = choice2;
    document.getElementById("ch3").innerText = choice3;
    document.getElementById("ch4").innerText = choice4;
function start(){
    question = "";
    choice1="";
    choice2="";
    choice3="";
    choice4="";
    chosen = Math.floor(Math.random() * card.length);
    question += card[chosen].name + "\n";
    var numbers = [chosen];
    while (numbers.length < 4) {
        var randomNumber = getRandomInt(0, card.length - 1);
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    shuffle(numbers);
    choice1+= card[numbers[0]].cname + " ";
    choice2+= card[numbers[1]].cname + " ";
    choice3+= card[numbers[2]].cname + " ";
    choice4+= card[numbers[3]].cname + " ";
    document.getElementById("question").innerText = question;
    document.getElementById("ch1").innerText = choice1;
    document.getElementById("ch2").innerText = choice2;
    document.getElementById("ch3").innerText = choice3;
    document.getElementById("ch4").innerText = choice4;
    //alert(sum_point);
    if(sum_point>=30&&a30==0){
        a30=1;
        alert("good!!");
    }else if(sum_point>=50&&a50==0){
        a50=1;
        alert("great!!");
    }else if(sum_point>=80&&a80==0){
        a80=1;
        alert("perfect!!");
    }else if(sum_point>=150&&a150==0){
        a150=1;
        alert("you are awsome!!");
    }
}
    function check1(){
        console.log("good");
        var ans=document.getElementById("ch1").innerText;
        //alert(ans==card[chosen].cname);
        //alert(ans);
        //alert(card[chosen].cname);
        if(ans==card[chosen].cname){
            console.log("ok");
            alert("correct");
            sum_point+=card[chosen].point;
            document.getElementById("point").innerText=sum_point;
            start();
        }else{
            alert("error");
            sum_point-=5;
            document.getElementById("point").innerText=sum_point;
            start();
        }
    }
    function check2(){
        console.log("good");
        var ans=document.getElementById("ch2").innerText;
        //alert(ans==card[chosen].cname);
        //alert(ans);
        //alert(card[chosen].cname);
        if(ans==card[chosen].cname){
            console.log("ok");
            alert("correct");
            sum_point+=card[chosen].point;
            document.getElementById("point").innerText=sum_point;
            start();
        }else{
            alert("error");
            sum_point-=5;
            document.getElementById("point").innerText=sum_point;
            start();
        }
    }
    function check3(){
        console.log("good");
        var ans=document.getElementById("ch3").innerText;
        //alert(ans==card[chosen].cname);
        //alert(ans);
        //alert(card[chosen].cname);
        if(ans==card[chosen].cname){
            console.log("ok");
            alert("correct");
            sum_point+=card[chosen].point;
            document.getElementById("point").innerText=sum_point;
            start();
        }else{
            alert("error");
            sum_point-=5;
            document.getElementById("point").innerText=sum_point;
            start();
        }
    }
    function check4(){
        console.log("good");
        var ans=document.getElementById("ch4").innerText;
        //alert(ans==card[chosen].cname);
        //alert(ans);
        //alert(card[chosen].cname);
        if(ans==card[chosen].cname){
            console.log("ok");
            alert("correct");
            sum_point+=card[chosen].point;
            document.getElementById("point").innerText=sum_point;
            start();
        }else{
            alert("error");
            sum_point-=5;
            document.getElementById("point").innerText=sum_point;
            start();
        }
    }
    function exitGame(){//回到首页
        document.getElementById("exit-button").addEventListener("click", function() {
        window.location.href = ".\網際網路程式設計專題\index.html";});
    }
