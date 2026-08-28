import React, { useState, useEffect, useRef } from "react";
import { ArrowRightLeft, ChevronLeft, ChevronRight, RotateCw } from "lucide-react";
import figmaSidebarPaths from "../../imports/IotWebTemplateUntitledEmbedFilterButton3StateCollapsed/svg-slzfzlnwha";
import svgPaths from "../../imports/Events-1/svg-sie2nzrjk8";
import accountMenuSvgPaths from "../../imports/个人信息/svg-8fxy3hc6dq";
import sideNavigationSvgPaths from "../../imports/SideNavigation/svg-as7mhjg5sg";
import managementSideNavigationSvgPaths from "../../imports/SideNavigation-1/svg-orisdonto9";
import technicianSideNavigationSvgPaths from "../../imports/SideNavigation-2/svg-9ivxva3ssw";
import { ACCOUNTS, type AppAccount } from "../data/accounts";
import type { AppNotification, UpgradeApproval } from "../data/approvalWorkflow";
import { LiveDataContent } from "./LiveDataContent";
import { DeviceArchiveContent } from "./DeviceArchiveContent";
import BatchOperationsContent from "./BatchOperationsContent";
import ApprovalCenterContent from "./ApprovalCenterContent";
import TaskListContent from "./TaskListContent";
import RuleConfigurationContent from "./RuleConfigurationContent";
import TaskProgressContent from "./TaskProgressContent";

function PageNavigationControls({ onBack, onForward, onRefresh }: { onBack: () => void; onForward: () => void; onRefresh: () => void }) {
  const controls = [
    { label: "返回", icon: ChevronLeft, onClick: onBack },
    { label: "前进", icon: ChevronRight, onClick: onForward },
    { label: "刷新", icon: RotateCw, onClick: onRefresh },
  ];
  return <div className="ml-8 flex items-center gap-1 border-l border-[#e7e7e7] pl-4">{controls.map(({ label, icon: Icon, onClick }) => <button key={label} type="button" aria-label={label} title={label} onClick={onClick} className="flex size-7 items-center justify-center rounded-[4px] text-[#141414] hover:bg-[#f5f7fa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1450f5]"><Icon className="size-4 stroke-[1.5]" /></button>)}</div>;
}

const translations = {
  en: {
    // Menu items
    equipmentOverview: "Equipment Overview",
    equipmentSearch: "Equipment Search",
    provisioning: "Provisioning",
    simMgmt: "SIM Mgmt",
    permissionMgmt: "Permission Mgmt",
    operationHistory: "Operation History",
    approvalCenter: "Approval Center",
    iotCardMgmt: "IoT Card Mgmt",
    iotCardQuery: "IoT Card Query",
    iotCardStatistics: "IoT Card Statistics",
    userManagement: "User Management",
    roleManagement: "Role Management",
    deviceOpsMonitoring: "Device Operations Monitoring",
    deviceBatchOperations: "Device Batch Operations",
    userFeedbackManagement: "User Feedback Management",
    systemSettings: "System Settings",
    hardwareTypeManagement: "Hardware Type Management",
    softwareVersionManagement: "Software Version Management",
    softwarePackageManagement: "Software Package Management",
    profileManagement: "Profile Management",
    // Tabs
    liveData: "Live Data",
    masterData: "Master Data",
    statistics: "Statistics",
    events: "Events",
    // Statistics page
    statisticsOverview: "Statistics Overview",
    totalRuns: "Total Runs",
    avgRuntime: "Avg. Runtime",
    totalDistance: "Total Distance",
    times: "times",
    hoursPerDay: "hrs/day",
    kilometers: "km",
    dataAnalysis: "Data Analysis",
    timeSegmentStats: "Time Segment Statistics",
    totalRunCount: "Total Run Count",
    runCountDay: "Run Count (Day)",
    runCountNight: "Run Count (Night)",
    floorStats: "Floor Statistics",
    floorLabel: "Floor",
    upCount: "Up Count",
    downCount: "Down Count",
    totalCount: "Total Count",
    peakTime: "Peak Time",
    mostActiveFloor: "Most Active Floor",
    floorVisitCount: "Total Faults",
    avgStopTime: "Door Block Faults",
    avgResponse: "Avg. Door Block Time",
    floorBaseStation: "Most Door Block Floor",
    day: "Day",
    hour24: "24H",
    day60: "60Day",
    chartPlaceholderLine: "Chart placeholder - Line chart showing time segment statistics",
    chartPlaceholderBar: "Chart placeholder - Horizontal bar chart showing floor statistics",
    minutes: "min",
    // Device info
    customer: "Customer",
    streetAddress: "Street Address",
    maintenanceContract: "Maintenance Contract",
    contract247: "24/7 Contract",
    valid: "Valid",
    online247: "24/7 Online",
    moderate: " (Moderate)",
    // Events card
    deviceEvents: "Device Events",
    allEvents: "All Events",
    faultMessage: "Fault Message",
    alarmMessage: "Alarm Message",
    modeChange: "Mode Change",
    customerNotification: "Customer Notification",
    serviceRequest: "Service Request",
    repairOrder: "Repair Order",
    maintenanceOrder: "Maintenance Order",
    last24Hours: "Last 24 Hours",
    last7Days: "Last 7 Days",
    last30Days: "Last 30 Days",
    // Event Statistics card
    eventStatistics: "Event Statistics",
    top3Title: "Top 3",
    occurrences: "times",
    // Table headers
    eventType: "Event Type",
    faultCode: "Fault Code",
    faultDescription: "Fault Description",
    faultOccurredAt: "Fault Occurred At",
    equipmentType: "Equipment Type",
    serviceMode: "Service Mode",
    alarmOccurredAt: "Alarm Occurred At",
    originalMode: "Original Mode",
    changedMode: "Changed Mode",
    modeChangedAt: "Mode Changed At",
    cnNumber: "CN Number",
    description: "Description",
    cnCreatedAt: "CN Created At",
    snNumber: "SN Number",
    snDescription: "SN Description",
    snCreatedAt: "SN Created At",
    repairSource: "Repair Source",
    repairType: "Repair Type",
    orderCreatedAt: "Order Created At",
    maintenanceOrderNo: "Maintenance Order No.",
    maintenanceType: "Maintenance Type",
    // Sample data
    elevator: "Elevator",
    normalMode: "Normal Mode",
    inspectionMode: "Inspection Mode",
    elevatorStopped: "Elevator Stopped",
    floorPositionLost: "Floor Position Lost",
    dispatch247: "24/7 Dispatch",
    safetyHazard: "Safety Hazard",
    semiMonthly: "Semi-Monthly",
    faultDescriptionText: "This is a long fault description text, this is a long fault description text...",
    // Operation Records
    opRecordsTitle: "Operation Records",
    userQuery: "User Query",
    opType: "Operation Type",
    opDate: "Operation Date",
    searchUserPlaceholder: "Search by employee ID/name/email",
    pleaseSelect: "Please Select",
    startDate: "Start Date",
    endDate: "End Date",
    resetBtn: "Reset",
    queryBtn: "Query",
    employeeId: "Employee ID",
    name: "Name",
    email: "Email",
    action: "Action",
    status: "Status",
    queued: "Queued",
    inProgress: "In Progress",
    successStatus: "Success",
    failedStatus: "Failed",
    systemUpgrade: "System Upgrade",
    logUpload: "Log Upload",
    deviceRegistration: "Device Registration",
    deviceUnbind: "Device Unbind",
    deviceRestart: "Device Restart",
    configUpdate: "Config Update",
    totalItemsPrefix: "Total",
    totalItemsSuffix: "items",
    operationRecords: "Operation Records",
  },
  cn: {
    // Menu items
    equipmentOverview: "设备总览",
    equipmentSearch: "设备查询",
    provisioning: "设备注册",
    simMgmt: "SIM卡管理",
    permissionMgmt: "权限管理",
    operationHistory: "平台操作日志",
    approvalCenter: "审批中心",
    iotCardMgmt: "物联卡管理",
    iotCardQuery: "物联卡查询",
    iotCardStatistics: "物联卡统计",
    userManagement: "用户管理",
    roleManagement: "角色管理",
    deviceOpsMonitoring: "设备运营监控",
    deviceBatchOperations: "设备批量操作",
    userFeedbackManagement: "用户反馈管理",
    systemSettings: "系统设置",
    hardwareTypeManagement: "硬件类型管理",
    softwareVersionManagement: "软件版本管理",
    softwarePackageManagement: "软件更新包管理",
    profileManagement: "Profile管理",
    // Tabs
    liveData: "实时数据",
    masterData: "设备档案",
    statistics: "统计数据",
    events: "设备事件",
    // Statistics page
    statisticsOverview: "统计总览",
    totalRuns: "运行总次数",
    avgRuntime: "平均运行时长",
    totalDistance: "运行总距离",
    times: "次",
    hoursPerDay: "小时/天",
    kilometers: "千米",
    dataAnalysis: "数据分析",
    timeSegmentStats: "分时段统计",
    totalRunCount: "总运行次数",
    runCountDay: "上行次数",
    runCountNight: "下行次数",
    floorStats: "楼层统计",
    floorLabel: "楼层",
    upCount: "上行次数",
    downCount: "下行次数",
    totalCount: "总运行次数",
    peakTime: "运行高峰时段",
    mostActiveFloor: "访问最多的楼层",
    floorVisitCount: "故障发生总次数",
    avgStopTime: "挡门故障次数",
    avgResponse: "平均挡门时长",
    floorBaseStation: "挡门最多楼层",
    day: "按天",
    hour24: "24小时",
    day60: "60天",
    chartPlaceholderLine: "图表占位符 - 显示分时段统计的折线图",
    chartPlaceholderBar: "图表占位符 - 显示楼层统计的水平柱状图",
    minutes: "分钟",
    // Device info
    customer: "所属项目",
    streetAddress: "项目地址",
    maintenanceContract: "保养合同",
    contract247: "云管家协议",
    valid: "有效",
    online247: "云管家在线",
    moderate: "（信号中等）",
    // Events card
    deviceEvents: "设备事件",
    allEvents: "全部事件",
    faultMessage: "故障消息",
    alarmMessage: "警铃消息",
    modeChange: "模式变化",
    customerNotification: "客户通知",
    serviceRequest: "服务需求",
    repairOrder: "走修工单",
    maintenanceOrder: "保养工单",
    last24Hours: "近24小时",
    last7Days: "近7天",
    last30Days: "近30天",
    // Event Statistics card
    eventStatistics: "事件统计",
    top3Title: "Top 3",
    occurrences: "次",
    // Table headers
    eventType: "事件类型",
    faultCode: "故障代码",
    faultDescription: "故障描述",
    faultOccurredAt: "故障发生时间",
    equipmentType: "设备类型",
    serviceMode: "服务模式",
    alarmOccurredAt: "警铃发生时间",
    originalMode: "原本模式",
    changedMode: "修改模式",
    modeChangedAt: "模式变化发生时间",
    cnNumber: "CN编号",
    description: "现象描述",
    cnCreatedAt: "CN产生时间",
    snNumber: "SN编号",
    snDescription: "SN描述",
    snCreatedAt: "SN产生时间",
    repairSource: "走修来源",
    repairType: "走修类型",
    orderCreatedAt: "工单建立时间",
    maintenanceOrderNo: "保养工单号",
    maintenanceType: "保养类型",
    // Sample data
    elevator: "直梯",
    normalMode: "普通模式",
    inspectionMode: "检修模式",
    elevatorStopped: "电梯停止运行",
    floorPositionLost: "楼层位置丢失",
    dispatch247: "云管家派单",
    safetyHazard: "安全隐患",
    semiMonthly: "半月保",
    faultDescriptionText: "这是一长段故障描述文字，这是一长段故障描述文字，这是一长段故障描述文字，",
    // Operation Records
    opRecordsTitle: "操作记录",
    userQuery: "用户查询",
    opType: "操作类型",
    opDate: "操作日期",
    searchUserPlaceholder: "搜索用户工号/姓名/邮箱",
    pleaseSelect: "请选择内容",
    startDate: "开始日期",
    endDate: "结束日期",
    resetBtn: "重置",
    queryBtn: "查询",
    employeeId: "工号",
    name: "姓名",
    email: "邮箱",
    action: "行为",
    status: "状态",
    queued: "队列中",
    inProgress: "进行中",
    successStatus: "成功",
    failedStatus: "失败",
    systemUpgrade: "系统升级",
    logUpload: "日志上传",
    deviceRegistration: "设备注册",
    deviceUnbind: "设备解绑",
    deviceRestart: "设备重启",
    configUpdate: "更新配置",
    totalItemsPrefix: "共",
    totalItemsSuffix: "项数据",
    operationRecords: "操作记录",
  },
};

function Content() {
  return (
    <div className="content-stretch flex gap-[24px] h-[32px] items-center relative shrink-0" data-name="content">
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name=".master/item headerMenu/menuLogo">
        <div className="content-stretch flex h-[28px] items-center overflow-clip relative shrink-0" data-name="item/menuLogo/baseLogo-light">
          <div className="h-[28px] relative shrink-0 w-[71.6px]" data-name="KONE">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71.6004 28">
              <g id="Vector">
                <path d={svgPaths.p32cebaf0} fill="var(--fill-0, #1450F5)" />
                <path d={svgPaths.p373e9b00} fill="var(--fill-0, #1450F5)" />
                <path d={svgPaths.p1adcf9f0} fill="var(--fill-0, #1450F5)" />
                <path d={svgPaths.p10952800} fill="var(--fill-0, #1450F5)" />
                <path d={svgPaths.p2a30a00} fill="var(--fill-0, #1450F5)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Content />
      <p className="font-['PingFang_SC:Semibold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#141414] text-[18px] text-center whitespace-nowrap">IOT Essential</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="Button 按钮">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="chevron-left">
          <div className="absolute flex inset-[18.75%_31.25%_18.75%_33.98%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
              <div className="relative size-full" data-name="Union">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.56346 10">
                  <path clipRule="evenodd" d={svgPaths.p2f116d80} fill="var(--fill-0, #141414)" fillRule="evenodd" id="Union" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="Button 按钮">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[16px] top-1/2" data-name="chevron-right">
          <div className="absolute flex inset-[19.27%_33.98%_18.23%_31.25%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
              <div className="relative size-full" data-name="Union">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.56346 10">
                  <path clipRule="evenodd" d={svgPaths.p2f116d80} fill="var(--fill-0, #959595)" fillRule="evenodd" id="Union" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="Button 按钮">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="refresh-2">
          <div className="absolute inset-[6.25%]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path clipRule="evenodd" d={svgPaths.p8641600} fill="var(--fill-0, #141414)" fillRule="evenodd" id="Union" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return <Frame2 />;
}

function HeaderActionIcon({ children, label, onClick }: { children: React.ReactNode; label: string; onClick?: () => void }) {
  const Component = onClick ? "button" : "div";
  return (
    <Component
      {...(onClick ? { onClick, type: "button" as const } : {})}
      aria-label={label}
      className={`relative flex size-8 items-center justify-center rounded-[4px] text-[#1450f5] transition-colors ${onClick ? "cursor-pointer border-0 bg-transparent hover:bg-[#f3f6fe] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1450f5]" : ""}`}
    >
      {children}
    </Component>
  );
}

function NotificationCard({ notification, onOpen, variant = "panel" }: { notification: AppNotification; onOpen: () => void; variant?: "panel" | "temporary" }) {
  const title = notification.title ?? notification.message;
  const detail = notification.detail;
  const timeLabel = notification.timeLabel;
  const actionLabel = notification.actionLabel ?? (notification.kind === "approved" ? "前往任务中心" : "查看审批");
  const isPanel = variant === "panel";

  return (
    <article className={isPanel ? "w-full rounded-[6px] bg-[#f5f7fa] px-3 py-2" : "rounded-[6px] border-[0.5px] border-[#c8cad0] bg-white p-4 shadow-[0_8px_10px_rgba(0,0,0,0.1)]"}>
      <div className={`flex flex-col ${isPanel ? "gap-2" : "gap-4"}`}>
        <div className={`flex flex-col ${isPanel ? "gap-1" : "gap-2"}`}>
          <p className={isPanel ? "text-[14px] font-semibold leading-[22px] text-[#141414]" : "text-[16px] font-semibold leading-6 text-[#141414]"}>{title}</p>
          <div className="flex flex-col gap-1 text-[14px] leading-[22px]">
            {detail && <p className="text-[#141414]">{detail}</p>}
            {notification.remark && <p className="text-[#676a72]">备注：{notification.remark}</p>}
          </div>
        </div>
        <div className="flex items-start gap-2">
          {timeLabel && <p className="min-w-0 flex-1 text-[14px] leading-[22px] text-[#676a72]">{timeLabel}</p>}
          <button type="button" onClick={onOpen} className="shrink-0 rounded-[4px] text-[14px] font-medium leading-[22px] text-[#1450f5] hover:underline">{actionLabel}</button>
        </div>
      </div>
    </article>
  );
}

function Frame3({ language, onLanguageChange, user, onLogout, onSwitchAccount, taskBadgeCount, notifications, onOpenApprovalCenter, onOpenTaskList, onOpenMessageCenter, onMarkNotificationsRead }: { language: string; onLanguageChange: () => void; user: AppAccount; onLogout?: () => void; onSwitchAccount?: (account: AppAccount) => void; taskBadgeCount: number; notifications: AppNotification[]; onOpenApprovalCenter: () => void; onOpenTaskList: () => void; onOpenMessageCenter: () => void; onMarkNotificationsRead: () => void }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAccountSwitchOpen, setIsAccountSwitchOpen] = useState(false);
  const [isNotificationListOpen, setIsNotificationListOpen] = useState(false);
  const [isLoginNoticeVisible, setIsLoginNoticeVisible] = useState(false);
  const hasShownLoginNotice = useRef(false);
  const unreadNotifications = notifications.filter((notification) => notification.unread);
  const latestUnreadNotification = unreadNotifications[0];
  const recentNotifications = [...notifications].sort((left, right) => (right.timeLabel ?? "").localeCompare(left.timeLabel ?? "")).slice(0, 5);
  const isChinese = language === "cn";
  const labels = isChinese
    ? { notifications: "任务列表", language: "切换语言", bell: "消息通知", profile: "用户菜单", name: user.name, role: user.role, account: "个人信息", feedback: "产品反馈", logout: "退出登录", switchAccount: "切换账号", approvalShortcut: "进入审批中心" }
    : { notifications: "Task list", language: "Switch language", bell: "Notifications", profile: "User menu", name: user.nameEn, role: user.roleEn, account: "Profile", feedback: "Product feedback", logout: "Log out", switchAccount: "Switch account", approvalShortcut: "Open Approval Center" };
  useEffect(() => {
    hasShownLoginNotice.current = false;
    setIsNotificationListOpen(false);
    setIsLoginNoticeVisible(false);
  }, [user.email]);
  useEffect(() => {
    if (!latestUnreadNotification || hasShownLoginNotice.current) return;
    hasShownLoginNotice.current = true;
    setIsLoginNoticeVisible(true);
    const timeoutId = window.setTimeout(() => setIsLoginNoticeVisible(false), 10000);
    return () => window.clearTimeout(timeoutId);
  }, [latestUnreadNotification]);
  const openApproval = () => { setIsLoginNoticeVisible(false); setIsNotificationListOpen(false); onMarkNotificationsRead(); onOpenApprovalCenter(); };
  const openNotification = (notification: AppNotification) => {
    setIsLoginNoticeVisible(false);
    setIsNotificationListOpen(false);
    onMarkNotificationsRead();
    if (notification.actionTarget === "task" || notification.kind === "approved") onOpenTaskList();
    else onOpenApprovalCenter();
  };
  const toggleNotificationList = () => {
    const nextOpen = !isNotificationListOpen;
    setIsLoginNoticeVisible(false);
    setIsNotificationListOpen(nextOpen);
    if (nextOpen && unreadNotifications.length > 0) onMarkNotificationsRead();
  };

  return <div className="relative flex items-center gap-2">
    <div className="flex h-8 items-center gap-2">
      <div className="relative"><HeaderActionIcon label={labels.notifications} onClick={onOpenTaskList}><svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16"><g fill="currentColor" transform="translate(2 2) rotate(-90 6 6)"><path d={figmaSidebarPaths.p624b00} /><path d={figmaSidebarPaths.p36a62500} /><path d={figmaSidebarPaths.p1a0d76f0} /><path d={figmaSidebarPaths.p311a7ac0} /></g></svg></HeaderActionIcon></div>
      <span aria-hidden="true" className="h-3.5 w-px bg-[#dfe1e8]" />
      <HeaderActionIcon label={labels.language} onClick={onLanguageChange}><svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16"><path d={figmaSidebarPaths.p2c6ba200} fill="currentColor" transform="translate(2 2)" /></svg></HeaderActionIcon>
      <div className="relative"><HeaderActionIcon label={labels.bell} onClick={toggleNotificationList}><svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16"><g fill="currentColor" transform="translate(2.744 2.25)"><path clipRule="evenodd" d={figmaSidebarPaths.p27a9c780} fillRule="evenodd" /><path d={figmaSidebarPaths.p2ab2df00} /></g></svg></HeaderActionIcon>{unreadNotifications.length > 0 && <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#f51414] px-1 text-[12px] leading-4 text-white">{unreadNotifications.length}</span>}{isNotificationListOpen && <div className="absolute right-0 top-[38px] z-50 flex w-[364px] flex-col gap-2 rounded-[8px] bg-white p-3 shadow-[0_4px_5px_rgba(0,0,0,0.1)]"><div className="flex items-center justify-between whitespace-nowrap"><p className="text-[16px] font-semibold leading-6 text-[#141414]">{labels.bell}</p><button type="button" onClick={() => { setIsNotificationListOpen(false); onOpenMessageCenter(); }} className="text-[14px] leading-[22px] text-[#1450f5] hover:underline">{isChinese ? "进入消息中心" : "Message center"}</button></div><div className="max-h-[440px] space-y-2 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{recentNotifications.length ? recentNotifications.map((notification) => <NotificationCard key={notification.id} notification={notification} variant="panel" onOpen={() => openNotification(notification)} />) : <p className="py-4 text-center text-[14px] text-[#8f9195]">{isChinese ? "暂无消息" : "No messages"}</p>}</div></div>}</div>
    </div>
    {isLoginNoticeVisible && latestUnreadNotification && <div className="absolute right-[40px] top-[44px] z-[60] w-[360px]"><NotificationCard notification={latestUnreadNotification} variant="temporary" onOpen={() => openNotification(latestUnreadNotification)} /></div>}
    <div className="relative" onMouseEnter={() => setIsProfileOpen(true)} onMouseLeave={() => { if (!isAccountSwitchOpen) setIsProfileOpen(false); }}>
      <button type="button" aria-expanded={isProfileOpen} aria-label={labels.profile} className="size-8 overflow-hidden rounded-full border-0 bg-[#d0dcfd] p-0 transition-transform hover:scale-[1.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1450f5]"><img alt="" className="size-full object-cover" src={user.avatar} /></button>
      {isProfileOpen && <div className="absolute right-0 top-8 z-50 w-[166px] rounded-[8px] bg-white px-[6px] pb-2 pt-3 shadow-[0px_4px_5px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 px-1">
            <span className="flex size-8 items-center justify-center rounded-full bg-[#f3f6fe] text-[#1450f5]"><svg aria-hidden="true" className="size-[18px]" fill="none" viewBox="0 0 18 18"><path clipRule="evenodd" d={accountMenuSvgPaths.p3a4d8700} fill="currentColor" fillRule="evenodd" transform="translate(2.53 1.69)" /></svg></span>
            <span className="truncate text-[14px] font-semibold leading-[22px] text-[#141414]">{labels.name}</span>
          </div>
          <div className="flex flex-col gap-1">
            <button type="button" className="flex w-full items-center gap-[6px] rounded-[4px] px-[6px] py-[3px] text-left text-[14px] leading-[22px] text-[#141414] hover:bg-[#f5f7fa]"><svg aria-hidden="true" className="size-4 shrink-0" fill="none" viewBox="0 0 16 16"><path clipRule="evenodd" d={accountMenuSvgPaths.p31849e00} fill="currentColor" fillRule="evenodd" transform="translate(2.25 1.55)" /></svg><span>{labels.account}</span></button>
            <button type="button" onClick={() => { setIsProfileOpen(false); setIsAccountSwitchOpen(false); onOpenApprovalCenter(); }} className="flex w-full items-center gap-[6px] rounded-[4px] px-[6px] py-[3px] text-left text-[14px] leading-[22px] text-[#141414] hover:bg-[#f5f7fa]"><svg aria-hidden="true" className="size-4 shrink-0" fill="none" viewBox="0 0 16 16"><path d={accountMenuSvgPaths.p1a8a1400} fill="currentColor" transform="translate(2 1.16)" /></svg><span>{isChinese ? "审批中心" : "Approval Center"}</span></button>
            <button type="button" className="flex w-full items-center gap-[6px] rounded-[4px] px-[6px] py-[3px] text-left text-[14px] leading-[22px] text-[#141414] hover:bg-[#f5f7fa]"><svg aria-hidden="true" className="size-4 shrink-0" fill="none" viewBox="0 0 16 16"><path clipRule="evenodd" d={accountMenuSvgPaths.p3f209800} fill="currentColor" fillRule="evenodd" transform="translate(2 2)" /></svg><span>{labels.feedback}</span></button>
            <div className="relative">
              <button type="button" aria-expanded={isAccountSwitchOpen} onClick={() => setIsAccountSwitchOpen((current) => !current)} className="flex w-full items-center justify-between rounded-[4px] px-[6px] py-[3px] text-left text-[14px] leading-[22px] text-[#141414] hover:bg-[#f5f7fa]"><span className="flex items-center gap-[6px]"><ArrowRightLeft aria-hidden="true" className="size-4 shrink-0" strokeWidth={1.7} />{labels.switchAccount}</span><span className={`text-[#8f9195] transition-transform ${isAccountSwitchOpen ? "rotate-180" : ""}`}>›</span></button>
              {isAccountSwitchOpen && <div className="absolute right-[166px] top-[-8px] z-[60] w-[196px] rounded-[8px] bg-white p-[6px] shadow-[0_4px_12px_rgba(0,0,0,0.12)]">{ACCOUNTS.map((account) => <button key={account.email} type="button" onClick={() => { onSwitchAccount?.(account); setIsAccountSwitchOpen(false); setIsProfileOpen(false); }} className={`flex w-full items-center gap-2 rounded-[4px] px-2 py-2 text-left hover:bg-[#f5f7fa] ${account.email === user.email ? "bg-[#f3f6fe]" : ""}`}><img src={account.avatar} alt="" className="size-7 rounded-full object-cover" /><span className="min-w-0 flex-1"><span className="block text-[14px] leading-[18px] text-[#141414]">{language === "cn" ? account.name : account.nameEn}</span><span className="block truncate text-[12px] leading-[16px] text-[#737380]">{language === "cn" ? account.role : account.roleEn}</span></span>{account.email === user.email && <span className="text-[#1450f5]">✓</span>}</button>)}</div>}
            </div>
            <button type="button" onClick={onLogout} className="flex w-full items-center gap-[6px] rounded-[4px] px-[6px] py-[3px] text-left text-[14px] leading-[22px] text-[#141414] hover:bg-[#f5f7fa]"><svg aria-hidden="true" className="size-4 shrink-0" fill="none" viewBox="0 0 16 16"><g fill="currentColor" transform="translate(1 2)"><path d={accountMenuSvgPaths.p36ec5a00} /><path d={accountMenuSvgPaths.p18eb0d00} /></g></svg><span>{labels.logout}</span></button>
          </div>
        </div>
      </div>}
    </div>
  </div>;
}

type SidebarIconName =
  | "overview"
  | "search"
  | "provisioning"
  | "iot"
  | "permissions"
  | "operation-history"
  | "approval-center"
  | "monitoring"
  | "batch-operations"
  | "feedback"
  | "settings";

function FigmaSidebarIcon({ name, className, managerNavigation = false, technicianNavigation = false }: { name: SidebarIconName; className?: string; managerNavigation?: boolean; technicianNavigation?: boolean }) {
  const svgClass = `size-5 shrink-0 ${className || ""}`;

  switch (name) {
    case "overview":
      return <svg aria-hidden="true" className={svgClass} fill="none" viewBox="0 0 20 20"><path d={managerNavigation ? managementSideNavigationSvgPaths.p315b5a80 : sideNavigationSvgPaths.p315b5a80} fill="currentColor" transform="translate(2.5 2.07)" /></svg>;
    case "search":
      return <svg aria-hidden="true" className={svgClass} fill="none" viewBox="0 0 20 20"><path clipRule="evenodd" d={technicianNavigation ? technicianSideNavigationSvgPaths.p3b76af00 : managerNavigation ? managementSideNavigationSvgPaths.p3b76af00 : sideNavigationSvgPaths.p3b76af00} fill="currentColor" fillRule="evenodd" transform="translate(2.5 2.5)" /></svg>;
    case "provisioning":
      return <svg aria-hidden="true" className={svgClass} fill="none" viewBox="0 0 20 20"><g fill="currentColor" transform="translate(1.875 2.5)"><path d={technicianNavigation ? technicianSideNavigationSvgPaths.p28f67f40 : managerNavigation ? managementSideNavigationSvgPaths.p28f67f40 : sideNavigationSvgPaths.p28f67f40} /><path d={technicianNavigation ? technicianSideNavigationSvgPaths.p13d65580 : managerNavigation ? managementSideNavigationSvgPaths.p13d65580 : sideNavigationSvgPaths.p13d65580} /><path d={technicianNavigation ? technicianSideNavigationSvgPaths.p1b60f080 : managerNavigation ? managementSideNavigationSvgPaths.p1b60f080 : sideNavigationSvgPaths.p1b60f080} /><path d={technicianNavigation ? technicianSideNavigationSvgPaths.p231bb80 : managerNavigation ? managementSideNavigationSvgPaths.p231bb80 : sideNavigationSvgPaths.p231bb80} /></g></svg>;
    case "iot":
      return <svg aria-hidden="true" className={svgClass} fill="none" viewBox="0 0 20 20"><g fill="currentColor" transform="translate(1.25 3.75)"><path d={managerNavigation ? managementSideNavigationSvgPaths.p3c437a30 : sideNavigationSvgPaths.p3c437a30} /><path d={managerNavigation ? managementSideNavigationSvgPaths.p38607500 : sideNavigationSvgPaths.p38607500} /></g></svg>;
    case "permissions":
      return <svg aria-hidden="true" className={svgClass} fill="none" viewBox="0 0 20 20"><path d={sideNavigationSvgPaths.p11290b00} fill="currentColor" transform="translate(.625 1.25)" /></svg>;
    case "operation-history":
      return <svg aria-hidden="true" className={svgClass} fill="none" viewBox="0 0 20 20"><path clipRule="evenodd" d={figmaSidebarPaths.p34913e80} fill="currentColor" fillRule="evenodd" transform="translate(3.125 1.875)" /></svg>;
    case "approval-center":
      return <svg aria-hidden="true" className={svgClass} fill="none" viewBox="0 0 20 20"><path d="M10 2.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5Zm0 1.25a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-5.5 6h11v2.2l-1.25 1v3.3H5.75v-3.3l-1.25-1V9.5Zm1.25 1.25v.35l1.25 1v2.4h6v-2.4l1.25-1v-.35h-8.5ZM8.4 12h3.2v1.25H8.4V12Z" fill="currentColor" /></svg>;
    case "monitoring":
      return <svg aria-hidden="true" className={svgClass} fill="none" viewBox="0 0 20 20"><g fill="currentColor" transform="translate(2.222 2.222)"><path d={sideNavigationSvgPaths.p98443b0} /><path d={sideNavigationSvgPaths.p3239d500} /><path d={sideNavigationSvgPaths.p53904f0} /></g></svg>;
    case "batch-operations":
      return <svg aria-hidden="true" className={svgClass} fill="none" viewBox="0 0 20 20"><path clipRule="evenodd" d={figmaSidebarPaths.pb1de680} fill="currentColor" fillRule="evenodd" transform="translate(3.125 1.875)" /></svg>;
    case "feedback":
      return <svg aria-hidden="true" className={svgClass} fill="none" viewBox="0 0 20 20"><path clipRule="evenodd" d={figmaSidebarPaths.pc5545f0} fill="currentColor" fillRule="evenodd" transform="translate(3.75 2.5)" /></svg>;
    case "settings":
      return <svg aria-hidden="true" className={svgClass} fill="none" viewBox="0 0 20 20"><g fill="currentColor" transform="translate(2.422 1.443)"><path clipRule="evenodd" d={sideNavigationSvgPaths.p3b5d8600} fillRule="evenodd" /><path clipRule="evenodd" d={sideNavigationSvgPaths.p2b6e1c00} fillRule="evenodd" /></g></svg>;
  }
}

function SidebarChevron({ expanded, managerNavigation = false }: { expanded: boolean; managerNavigation?: boolean }) {
  return (
    <svg aria-hidden="true" className={`size-4 shrink-0 transition-transform ${expanded ? "" : "rotate-180"}`} fill="none" viewBox="0 0 16 16">
      <path d={managerNavigation ? managementSideNavigationSvgPaths.p2bdcce80 : sideNavigationSvgPaths.p2bdcce80} fill="currentColor" transform="translate(3.54 5.31)" />
    </svg>
  );
}

type SidebarMenuItem = { id: string; label: string; icon: SidebarIconName };
type SidebarMenuGroup = SidebarMenuItem & { children: SidebarMenuItem[] };

function MenuItem({ t, isCollapsed, activeItem, onItemChange, visibleItems }: { t: typeof translations.en; isCollapsed: boolean; activeItem: string | null; onItemChange: (item: string) => void; visibleItems: string[] }) {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({ iot: true, operations: true, permissions: true, settings: true });
  const toggleGroup = (group: string) => setExpandedGroups((current) => ({ ...current, [group]: !current[group] }));

  const topLevelItems: SidebarMenuItem[] = [
    { id: "overview", label: t.equipmentOverview, icon: "overview" },
    { id: "search", label: t.equipmentSearch, icon: "search" },
    { id: "provisioning", label: t.provisioning, icon: "provisioning" },
  ];
  const groups: SidebarMenuGroup[] = [
    { id: "iot", label: t.iotCardMgmt, icon: "iot", children: [{ id: "iot-card-query", label: t.iotCardQuery, icon: "iot" }, { id: "iot-card-statistics", label: t.iotCardStatistics, icon: "iot" }] },
    { id: "operations", label: "运维管理", icon: "monitoring", children: [{ id: "batch-operations", label: t.deviceBatchOperations, icon: "batch-operations" }, { id: "monitoring", label: t.deviceOpsMonitoring, icon: "monitoring" }, { id: "operation-history", label: t.operationHistory, icon: "operation-history" }, { id: "feedback", label: t.userFeedbackManagement, icon: "feedback" }] },
    { id: "permissions", label: t.permissionMgmt, icon: "permissions", children: [{ id: "user-management", label: t.userManagement, icon: "permissions" }, { id: "role-management", label: t.roleManagement, icon: "permissions" }] },
    { id: "settings", label: t.systemSettings, icon: "settings", children: [{ id: "hardware-types", label: t.hardwareTypeManagement, icon: "settings" }, { id: "software-versions", label: t.softwareVersionManagement, icon: "settings" }, { id: "software-packages", label: t.softwarePackageManagement, icon: "settings" }, { id: "profile-management", label: t.profileManagement, icon: "settings" }, { id: "fault-management", label: "Fault信息管理", icon: "settings" }, { id: "rule-configuration", label: "规则配置", icon: "settings" }] },
  ];
  const isManagementNavigation = visibleItems.includes("iot-card-query") && visibleItems.length === 5 && !visibleItems.includes("monitoring");
  const isTechnicianNavigation = visibleItems.length === 2 && visibleItems.includes("search") && visibleItems.includes("provisioning");
  const displayedTopLevelItems = topLevelItems;
  const displayedGroups = isManagementNavigation ? groups.filter((group) => group.id === "iot") : groups;
  const isGroupVisible = (group: SidebarMenuGroup) => visibleItems.includes(group.id) || group.children.some((child) => visibleItems.includes(child.id));
  const renderItem = (item: SidebarMenuItem) => {
    const isActive = activeItem === item.id;
    return <button key={item.id} onClick={() => onItemChange(item.id)} title={isCollapsed ? item.label : undefined} className={`group flex min-h-[36px] w-full items-center gap-2 rounded-[6px] border-0 px-4 py-[7px] text-left font-['PingFang_SC:Regular',sans-serif] font-normal text-[14px] leading-[22px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#1450f5] ${isCollapsed ? "justify-center px-2" : ""} ${isActive ? "bg-[#f3f6fe] text-[#1450f5]" : "bg-white text-[#676a72] hover:bg-[#f5f7fa] hover:text-[#141414]"}`}><FigmaSidebarIcon name={item.icon} managerNavigation={isManagementNavigation} technicianNavigation={isTechnicianNavigation} />{!isCollapsed && <span className="min-w-0 flex-1 truncate">{item.label}</span>}</button>;
  };

  return <nav aria-label="Primary navigation" className="w-full px-2 font-['PingFang_SC:Regular',sans-serif] font-normal">
    <div className={`flex flex-col gap-1 ${isCollapsed ? "items-center" : ""}`}>
      {displayedTopLevelItems.filter((item) => visibleItems.includes(item.id)).map(renderItem)}
      {displayedGroups.filter(isGroupVisible).map((group) => {
        const isExpanded = expandedGroups[group.id];
        return <div key={group.id} className="w-full">
          <button onClick={() => !isCollapsed && toggleGroup(group.id)} title={isCollapsed ? group.label : undefined} className={`group flex min-h-[36px] w-full items-center gap-2 rounded-[6px] border-0 px-4 py-[7px] text-left font-['PingFang_SC:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-[#141414] transition-colors hover:bg-[#f5f7fa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#1450f5] ${isCollapsed ? "justify-center px-2" : ""}`}><FigmaSidebarIcon name={group.icon} managerNavigation={isManagementNavigation} />{!isCollapsed && <span className="min-w-0 flex-1 truncate">{group.label}</span>}{!isCollapsed && <SidebarChevron expanded={isExpanded} managerNavigation={isManagementNavigation} />}</button>
          {!isCollapsed && isExpanded && <div className="flex flex-col gap-1 py-1">{group.children.filter((child) => visibleItems.includes(child.id)).map((child) => <button key={child.id} onClick={() => onItemChange(child.id)} className={`min-h-[36px] w-full rounded-[6px] border-0 py-[7px] pl-11 pr-4 text-left font-['PingFang_SC:Regular',sans-serif] font-normal text-[14px] leading-[22px] transition-colors ${activeItem === child.id ? "bg-[#f3f6fe] text-[#1450f5]" : "text-[#676a72] hover:bg-[#f5f7fa] hover:text-[#141414]"}`}>{child.label}</button>)}</div>}
        </div>;
      })}
    </div>
  </nav>;
}

function Content1({ t, isCollapsed, activeItem, onItemChange, visibleItems }: { t: typeof translations.en; isCollapsed: boolean; activeItem: string | null; onItemChange: (item: string) => void; visibleItems: string[] }) {
  return (
    <div className="content-stretch flex min-h-0 flex-1 flex-col gap-[16px] items-start overflow-y-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full" data-name="content">
      <MenuItem t={t} isCollapsed={isCollapsed} activeItem={activeItem} onItemChange={onItemChange} visibleItems={visibleItems} />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#fafbfc] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[6px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">#45509091</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[28px]" data-name="elevator">
        <div className="absolute inset-[12.5%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
            <path clipRule="evenodd" d={svgPaths.p11425840} fill="var(--fill-0, #141414)" fillRule="evenodd" id="Union" />
          </svg>
        </div>
      </div>
      <p className="font-['PingFang_SC:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#141414] text-[18px] whitespace-nowrap">DT1</p>
      <Frame5 />
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="中国移动">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ä¸­å½ç§»å¨">
          <circle cx="8" cy="8" fill="var(--fill-0, white)" id="Ellipse 2738" r="8" />
          <path d={svgPaths.p167e6800} fill="var(--fill-0, #0085D0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component({ t }: { t: typeof translations.en }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="信号强度">
      <div className="bg-[#f3f6fe] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[3px] shrink-0" data-name="Tag 标签">
        <div aria-hidden="true" className="absolute border border-[#1450f5] border-solid inset-0 pointer-events-none rounded-[3px]" />
        <div className="relative shrink-0 size-[14px]" data-name="prefixIcon">
          <div className="absolute inset-[8.11%_15.63%]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.625 11.7299">
              <path d={svgPaths.p234d300} fill="var(--fill-0, #1450F5)" id="Union" />
            </svg>
          </div>
        </div>
        <p className="font-['PingFang_SC:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1450f5] text-[12px] whitespace-nowrap">24/7</p>
      </div>
      <div className="bg-[#f7fffa] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Component 1">
        <div aria-hidden="true" className="absolute border border-[#1ed273] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="relative shrink-0 size-[14px]" data-name="cloud">
          <div className="absolute inset-[18.74%_6.25%_18.76%_6.25%]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.25 8.75">
              <path d={svgPaths.p1f537200} fill="var(--fill-0, #1ED273)" id="Union" />
            </svg>
          </div>
        </div>
        <p className="font-['PingFang_SC:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1ed273] text-[12px] text-center whitespace-nowrap">{t.online247}</p>
      </div>
      <div className="bg-[#f5f7fa] content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Component 2">
        <div aria-hidden="true" className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Component1 />
        <p className="font-['PingFang_SC:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#141414] text-[0px] whitespace-nowrap">
          <span className="leading-[20px] text-[12px]">-65dBm</span>
          <span className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] text-[12px]">{t.moderate}</span>
        </p>
      </div>
    </div>
  );
}

function Frame8({ t }: { t: typeof translations.en }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Frame6 />
        <Component t={t} />
      </div>
    </div>
  );
}

function Frame10({ t }: { t: typeof translations.en }) {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#676a72] text-[12px] whitespace-nowrap">{t.customer}</p>
    </div>
  );
}

function Frame11({ t }: { t: typeof translations.en }) {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#676a72] text-[12px] whitespace-nowrap">{t.streetAddress}</p>
    </div>
  );
}

function Frame12({ t }: { t: typeof translations.en }) {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#676a72] text-[12px] whitespace-nowrap">{t.maintenanceContract}</p>
    </div>
  );
}

function Frame13({ t }: { t: typeof translations.en }) {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#676a72] text-[12px] whitespace-nowrap">{t.contract247}</p>
    </div>
  );
}

function Frame9({ t }: { t: typeof translations.en }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[180px]">
          <Frame10 t={t} />
          <p className="font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] w-full">中国国家博物馆</p>
        </div>
        <div className="flex h-[20px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[20px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 1">
                  <line id="Line 231" stroke="var(--stroke-0, #DFE1E8)" x2="20" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[180px]">
          <Frame11 t={t} />
          <p className="font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] w-full">北京市东城区东长安街16号</p>
        </div>
        <div className="flex h-[20px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[20px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 1">
                  <line id="Line 231" stroke="var(--stroke-0, #DFE1E8)" x2="20" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[180px]">
          <Frame12 t={t} />
          <p className="font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] w-full">{t.valid} (KONE Care Plus)</p>
        </div>
        <div className="flex h-[20px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[20px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 1">
                  <line id="Line 231" stroke="var(--stroke-0, #DFE1E8)" x2="20" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[180px]">
          <Frame13 t={t} />
          <p className="font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] w-full">{t.valid}</p>
        </div>
      </div>
    </div>
  );
}

function Content2({ t, isActive, onClick }: { t: typeof translations.en; isActive: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className="bg-white content-stretch flex gap-[8px] items-center px-[8px] py-[5px] relative rounded-[3px] shrink-0 cursor-pointer border-0" data-name="content">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
        <div className="absolute inset-[9.37%_9.38%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path clipRule="evenodd" d={svgPaths.p10544e00} fill={isActive ? "var(--fill-0, #1450F5)" : "var(--fill-0, #676A72)"} fillRule="evenodd" id="Union" />
          </svg>
        </div>
      </div>
      <p className={`font-['PingFang_SC:${isActive ? 'Medium' : 'Regular'}',sans-serif] leading-[22px] not-italic relative shrink-0 text-[${isActive ? '#1450f5' : '#676a72'}] text-[14px] whitespace-nowrap`}>{t.liveData}</p>
    </button>
  );
}

function Content3({ t, isActive, onClick }: { t: typeof translations.en; isActive: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className="bg-white content-stretch flex gap-[8px] items-center px-[8px] py-[5px] relative rounded-[3px] shrink-0 cursor-pointer border-0" data-name="content">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
        <div className="absolute inset-[15.63%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <g id="Union">
              <path clipRule="evenodd" d={svgPaths.p1ef8d500} fill={isActive ? "var(--fill-0, #1450F5)" : "var(--fill-0, #676A72)"} fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p30675900} fill={isActive ? "var(--fill-0, #1450F5)" : "var(--fill-0, #676A72)"} fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p958cc00} fill={isActive ? "var(--fill-0, #1450F5)" : "var(--fill-0, #676A72)"} fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1152d200} fill={isActive ? "var(--fill-0, #1450F5)" : "var(--fill-0, #676A72)"} fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <p className={`font-['PingFang_SC:${isActive ? 'Medium' : 'Regular'}',sans-serif] leading-[22px] not-italic relative shrink-0 text-[${isActive ? '#1450f5' : '#676a72'}] text-[14px] whitespace-nowrap`}>{t.masterData}</p>
    </button>
  );
}

function Content4({ t, isActive, onClick }: { t: typeof translations.en; isActive: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className="bg-white content-stretch flex gap-[8px] items-center px-[8px] py-[5px] relative rounded-[3px] shrink-0 cursor-pointer border-0" data-name="content">
      <div className="relative shrink-0 size-[16px]" data-name="prefixIcon">
        <div className="absolute inset-[12.5%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <g id="Union">
              <path d={svgPaths.p1705a400} fill={isActive ? "var(--fill-0, #1450F5)" : "var(--fill-0, #676A72)"} />
              <path d={svgPaths.p2eaf3500} fill={isActive ? "var(--fill-0, #1450F5)" : "var(--fill-0, #676A72)"} />
              <path d={svgPaths.p35603380} fill={isActive ? "var(--fill-0, #1450F5)" : "var(--fill-0, #676A72)"} />
              <path d={svgPaths.p311a7ac0} fill={isActive ? "var(--fill-0, #1450F5)" : "var(--fill-0, #676A72)"} />
            </g>
          </svg>
        </div>
      </div>
      <p className={`font-['PingFang_SC:${isActive ? 'Medium' : 'Regular'}',sans-serif] leading-[22px] not-italic relative shrink-0 text-[${isActive ? '#1450f5' : '#676a72'}] text-[14px] whitespace-nowrap`}>{t.statistics}</p>
    </button>
  );
}

function Content5({ t, isActive, onClick }: { t: typeof translations.en; isActive: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className="bg-white content-stretch flex gap-[8px] items-center px-[8px] py-[5px] relative rounded-[3px] shrink-0 cursor-pointer border-0" data-name="content">
      <div className="relative shrink-0 size-[16px]" data-name="prefixIcon">
        <div className="absolute flex inset-[12.5%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
            <div className="relative size-full" data-name="Union">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <g id="Union">
                  <path d={svgPaths.p624b00} fill={isActive ? "var(--fill-0, #1450F5)" : "var(--fill-0, #676A72)"} />
                  <path d={svgPaths.p36a62500} fill={isActive ? "var(--fill-0, #1450F5)" : "var(--fill-0, #676A72)"} />
                  <path d={svgPaths.p1a0d76f0} fill={isActive ? "var(--fill-0, #1450F5)" : "var(--fill-0, #676A72)"} />
                  <path d={svgPaths.p311a7ac0} fill={isActive ? "var(--fill-0, #1450F5)" : "var(--fill-0, #676A72)"} />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className={`font-['PingFang_SC:${isActive ? 'Medium' : 'Regular'}',sans-serif] leading-[22px] not-italic relative shrink-0 text-[${isActive ? '#1450f5' : '#676a72'}] text-[14px] whitespace-nowrap`}>{t.events}</p>
    </button>
  );
}

function Content6({ t, isActive, onClick }: { t: typeof translations.en; isActive: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className="bg-white content-stretch flex gap-[8px] items-center px-[8px] py-[5px] relative rounded-[3px] shrink-0 cursor-pointer border-0" data-name="content">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="prefixIcon">
        <div className="absolute inset-[18.75%_9.38%_15.63%_9.38%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 10.5">
            <path d={svgPaths.p10a0fe40} fill={isActive ? "var(--fill-0, #1450F5)" : "var(--fill-0, #676A72)"} id="Union" />
          </svg>
        </div>
      </div>
      <p className={`font-['PingFang_SC:${isActive ? 'Medium' : 'Regular'}',sans-serif] leading-[22px] not-italic relative shrink-0 text-[${isActive ? '#1450f5' : '#676a72'}] text-[14px] whitespace-nowrap`}>{t.operationRecords}</p>
    </button>
  );
}

function NormalTabs({ t, activeTab, onTabChange }: { t: typeof translations.en; activeTab: 'liveData' | 'masterData' | 'statistics' | 'events' | 'operationRecords'; onTabChange: (tab: 'liveData' | 'masterData' | 'statistics' | 'events' | 'operationRecords') => void }) {
  return (
    <div className="absolute bg-white left-[256px] right-[24px] rounded-tl-[8px] rounded-tr-[8px] top-[224px]" data-name="normalTabs 选项卡-默认主题">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-white content-stretch flex items-start p-[8px] relative shrink-0" data-name="item/normalTabs/top/m">
          {activeTab === 'liveData' && <div aria-hidden="true" className="absolute border-[#1450f5] border-b-3 border-solid inset-0 pointer-events-none" />}
          <Content2 t={t} isActive={activeTab === 'liveData'} onClick={() => onTabChange('liveData')} />
        </div>
        <div className="bg-white content-stretch flex items-start p-[8px] relative shrink-0" data-name="item/normalTabs/top/m">
          {activeTab === 'masterData' && <div aria-hidden="true" className="absolute border-[#1450f5] border-b-3 border-solid inset-0 pointer-events-none" />}
          <Content3 t={t} isActive={activeTab === 'masterData'} onClick={() => onTabChange('masterData')} />
        </div>
        <div className="bg-white content-stretch flex items-start p-[8px] relative shrink-0" data-name="item/normalTabs/top/m">
          {activeTab === 'statistics' && <div aria-hidden="true" className="absolute border-[#1450f5] border-b-3 border-solid inset-0 pointer-events-none" />}
          <Content4 t={t} isActive={activeTab === 'statistics'} onClick={() => onTabChange('statistics')} />
        </div>
        <div className="bg-white content-stretch flex items-start p-[8px] relative shrink-0" data-name="item/normalTabs/top/m">
          {activeTab === 'events' && <div aria-hidden="true" className="absolute border-[#1450f5] border-b-3 border-solid inset-0 pointer-events-none" />}
          <Content5 t={t} isActive={activeTab === 'events'} onClick={() => onTabChange('events')} />
        </div>
        <div className="bg-white content-stretch flex items-start p-[8px] relative shrink-0" data-name="item/normalTabs/top/m">
          {activeTab === 'operationRecords' && <div aria-hidden="true" className="absolute border-[#1450f5] border-b-3 border-solid inset-0 pointer-events-none" />}
          <Content6 t={t} isActive={activeTab === 'operationRecords'} onClick={() => onTabChange('operationRecords')} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Frame14({ t }: { t: typeof translations.en }) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <div className="bg-[#4373f7] h-[14px] rounded-[1px] shrink-0 w-[4px]" />
        <p className="font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">{t.deviceEvents}</p>
      </div>
    </div>
  );
}

function EventStatisticsCard({ t }: { t: typeof translations.en }) {
  const [expanded, setExpanded] = useState(true);
  const isEn = t.eventType === 'Event Type';

  const rankColors = ['#FF7949', '#FFB145', '#FFD18D'];
  const barColors  = ['#FF7949', '#FFB145', '#FFD18D'];

  type StatItem = { label: string; count: number };
  type StatGroup = { title: string; iconEl: React.ReactNode; items: StatItem[] };

  const groups: StatGroup[] = [
    {
      title: t.faultMessage,
      iconEl: (
        <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="shrink-0">
          <circle cx="7" cy="7" r="5" stroke="#141414" strokeWidth="1.2"/>
          <path d="M10.5 10.5L13.5 13.5" stroke="#141414" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M7 4.5V7.5" stroke="#141414" strokeWidth="1.2" strokeLinecap="round"/>
          <circle cx="7" cy="9" r="0.6" fill="#141414"/>
        </svg>
      ),
      items: [
        { label: '10096', count: 18 },
        { label: '00834', count: 12 },
        { label: '48394', count: 6 },
      ],
    },
    {
      title: t.modeChange,
      iconEl: (
        <svg width="16" height="16" fill="none" viewBox="0 0 14 14" className="shrink-0">
          <path d={svgPaths.p8641600} fill="#141414"/>
        </svg>
      ),
      items: [
        { label: isEn ? 'Inspection → Normal' : '检修模式→普通模式', count: 29 },
        { label: isEn ? 'Normal → Inspection' : '普通模式→检修模式', count: 23 },
        { label: isEn ? 'Inspection → Normal' : '检修模式→普通模式', count: 12 },
      ],
    },
    {
      title: t.customerNotification,
      iconEl: (
        <div className="overflow-clip relative shrink-0 size-[20px]">
          <div className="absolute inset-[6.25%_3.13%_10%_6.25%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.125 16.751">
              <path d={svgPaths.p11290b00} fill="#141414" />
            </svg>
          </div>
        </div>
      ),
      items: [
        { label: 'CN000007', count: 27 },
        { label: 'CN000002', count: 12 },
        { label: 'CN000003', count: 3 },
      ],
    },
    {
      title: t.serviceRequest,
      iconEl: (
        <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="shrink-0">
          <path d="M10 2C8.34 2 7 3.34 7 5C7 5.48 7.11 5.93 7.31 6.33L2.3 11.3C2 11.6 2 12.1 2.3 12.4L3.6 13.7C3.9 14 4.4 14 4.7 13.7L9.67 8.69C10.07 8.89 10.52 9 11 9C12.66 9 14 7.66 14 6C14 5.52 13.89 5.07 13.69 4.67L12 6.5H10.5V5L12.33 3.31C11.93 2.51 11.02 2 10 2Z" fill="#141414"/>
        </svg>
      ),
      items: [
        { label: 'SN000008', count: 24 },
        { label: 'SN000004', count: 16 },
        { label: 'SN000003', count: 8 },
      ],
    },
  ];

  return (
    <div className="relative">
      {/* Section title with expand/collapse */}
      <div className="flex items-center justify-between pb-[8px]">
        <p className="font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic text-[#141414] text-[14px] whitespace-nowrap">{isEn ? 'Top 3 Stats' : 'Top3统计'}</p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-[4px] border-0 bg-transparent cursor-pointer text-[#1450f5] font-['PingFang_SC:Regular',sans-serif] text-[12px] leading-[20px] hover:opacity-80"
        >
          {isEn ? (expanded ? 'Collapse' : 'Expand') : (expanded ? '收起' : '展开')}
          <svg width="10" height="6" fill="none" viewBox="0 0 10 6" style={{ transition: 'transform 0.2s', transform: expanded ? 'rotate(0deg)' : 'rotate(180deg)' }}>
            <path d="M1 1L5 5L9 1" stroke="#1450F5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* 4 individual cards — collapsible */}
      {expanded && <div className="flex gap-[12px] items-stretch">
        {groups.map((group, gi) => {
          const maxCount = group.items[0]?.count ?? 1;
          return (
            <div key={gi} className="bg-[#fafbfc] flex-1 min-w-0 relative rounded-[6px] border border-[#dfe1e8]">
              <div className="flex flex-col gap-[10px] px-[16px] py-[12px]">
                {/* Group title with icon + Top 3 */}
                <div className="flex items-end justify-between">
                  <div className="flex items-center gap-[4px]">
                    {group.iconEl}
                    <p className="font-['PingFang_SC:Medium',sans-serif] leading-[22px] text-[#141414] text-[14px] whitespace-nowrap">{group.title}</p>
                  </div>
                  <span className="font-['PingFang_SC:Regular',sans-serif] text-[12px] text-[#676a72] whitespace-nowrap">{t.top3Title}</span>
                </div>

                {/* Top 3 items */}
                <div className="flex flex-col gap-[12px] pl-[4px]">
                  {group.items.map((item, ii) => (
                    <div key={ii} className="flex flex-col gap-[4px]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-[7px]">
                          <span
                            className="inline-flex items-center justify-center rounded-full text-[10px] font-['PingFang_SC:Medium',sans-serif] shrink-0 text-white"
                            style={{ width: 16, height: 16, backgroundColor: rankColors[ii] }}
                          >
                            {ii + 1}
                          </span>
                          <p className="font-['PingFang_SC:Regular',sans-serif] text-[12px] text-[#141414] leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap">{item.label}</p>
                        </div>
                        <div className="flex items-end gap-[1px] shrink-0 ml-[4px]">
                          <p className="font-['PingFang_SC:Medium',sans-serif] text-[#141414] text-[14px] leading-[22px]">{item.count}</p>
                          <p className="font-['PingFang_SC:Regular',sans-serif] text-[#676a72] text-[12px] leading-[20px]">{t.occurrences}</p>
                        </div>
                      </div>
                      {/* Bar */}
                      <div className="h-[4px] w-full rounded-full relative" style={{ overflow: 'clip' }}>
                        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[4px] rounded-full bg-[#dfe1e8]" />
                        <div
                          className="absolute left-0 top-1/2 -translate-y-1/2 h-[4px] rounded-full"
                          style={{
                            width: `${Math.round((item.count / maxCount) * 100)}%`,
                            backgroundColor: barColors[ii],
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>}
    </div>
  );
}

type RowData = {
  iconType: 'magnifier' | 'overdue';
  eventType: string;
  code: string;
  description: string;
  occurredAt: string;
  statusLabel: string;
  statusColor: string;
};

function EventsTableView({ t, onTimestampClick }: { t: typeof translations.en; onTimestampClick?: (row: RowData) => void }) {
  const isEn = t.eventType === 'Event Type';

  type FilterKey = 'fault' | 'alarm' | 'mode' | 'customer' | 'service' | 'repair' | 'maintenance';
  const [activeFilters, setActiveFilters] = useState<Set<FilterKey>>(
    new Set(['fault', 'alarm', 'mode', 'customer', 'repair', 'maintenance'])
  );
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 101;
  const totalPages = 11;

  const toggleFilter = (key: FilterKey) => {
    setActiveFilters(prev => {
      const next = new Set(prev);
      if (next.has(key)) { next.delete(key); } else { next.add(key); }
      return next;
    });
  };

  const filters: { key: FilterKey; label: string }[] = [
    { key: 'fault',       label: t.faultMessage },
    { key: 'alarm',       label: t.alarmMessage },
    { key: 'mode',        label: t.modeChange },
    { key: 'customer',    label: t.customerNotification },
    { key: 'service',     label: t.serviceRequest },
    { key: 'repair',      label: t.repairOrder },
    { key: 'maintenance', label: t.maintenanceOrder },
  ];

  const rows: RowData[] = [
    { iconType: 'magnifier', eventType: t.faultMessage,          code: '10096',     description: isEn ? 'Hall door contact not opened' : '厅门触点未打开',           occurredAt: '2026-03-18 13:18:39', statusLabel: isEn ? 'Not Restored' : '未恢复', statusColor: '#F51414' },
    { iconType: 'magnifier', eventType: t.alarmMessage,          code: '–',         description: '–',                                                                occurredAt: '2026-03-14 21:18:39', statusLabel: '',                                statusColor: '' },
    { iconType: 'magnifier', eventType: t.modeChange,            code: '–',         description: isEn ? 'Inspection → Normal' : '检修模式→普通模式',                  occurredAt: '2026-03-12 16:32:39', statusLabel: '',                                statusColor: '' },
    { iconType: 'magnifier', eventType: t.customerNotification,  code: 'CN000007',  description: t.elevatorStopped,                                                  occurredAt: '2026-03-13 18:18:39', statusLabel: isEn ? 'Not Restored' : '未恢复', statusColor: '#F51414' },
    { iconType: 'magnifier', eventType: t.serviceRequest,        code: 'SN000008',  description: t.floorPositionLost,                                                occurredAt: '2026-03-15 13:18:39', statusLabel: isEn ? 'Restored' : '已恢复',     statusColor: '#1ED273' },
    { iconType: 'magnifier', eventType: t.repairOrder,           code: '00000000',  description: t.safetyHazard,                                                    occurredAt: '2026-03-19 08:18:39', statusLabel: '',                                statusColor: '' },
    { iconType: 'magnifier', eventType: t.maintenanceOrder,      code: '00000000',  description: t.semiMonthly,                                                     occurredAt: '2026-03-21 13:18:39', statusLabel: '',                                statusColor: '' },
    { iconType: 'overdue',   eventType: t.faultMessage,          code: '15119',     description: isEn ? 'Hall door contact opened during run' : '运行过程中厅门触点断开', occurredAt: '2026-03-09 05:18:39', statusLabel: isEn ? 'Restored' : '已恢复',     statusColor: '#1ED273' },
    { iconType: 'magnifier', eventType: t.modeChange,            code: '–',         description: isEn ? 'Normal → Inspection' : '普通模式→检修模式',                  occurredAt: '2026-03-22 21:18:39', statusLabel: '',                                statusColor: '' },
    { iconType: 'magnifier', eventType: t.modeChange,            code: '–',         description: isEn ? 'Normal → Inspection' : '普通模式→检修模式',                  occurredAt: '2026-03-18 18:18:39', statusLabel: '',                                statusColor: '' },
  ];

  const getPaginationPages = (): (number | '...')[] => {
    return [1, 2, 3, 4, 5, '...', totalPages];
  };

  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full">

        {/* Filter tags */}
        <div className="content-stretch flex flex-wrap gap-[7px] items-center relative shrink-0">
          {filters.map(({ key, label }) => {
            const active = activeFilters.has(key);
            return (
              <button
                key={key}
                onClick={() => toggleFilter(key)}
                className={`content-stretch flex items-center px-[8px] py-[2px] relative rounded-[3px] shrink-0 border-0 cursor-pointer transition-colors ${active ? 'bg-[#f3f6fe]' : 'bg-white'}`}
              >
                <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[3px] ${active ? 'border-[#1450f5]' : 'border-[#c8cad0]'}`} />
                <p className={`font-['PingFang_SC:${active ? 'Medium' : 'Regular'}',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] whitespace-nowrap ${active ? 'text-[#1450f5]' : 'text-[#141414]'}`}>{label}</p>
              </button>
            );
          })}
        </div>

        {/* Table header */}
        <div className="w-full flex flex-row items-center border-b border-[#dfe1e8] pb-[8px]">
          <div className="shrink-0 w-[48px]" />
          <div className="flex-1 min-w-0">
            <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] text-[#8f9195] text-[12px]">{t.eventType}</p>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] text-[#8f9195] text-[12px]">{isEn ? 'Event Code' : '事件代码'}</p>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] text-[#8f9195] text-[12px]">{t.description}</p>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] text-[#8f9195] text-[12px]">{isEn ? 'Occurred At' : '发生时间'}</p>
          </div>
          <div className="shrink-0 w-[125px]">
            <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] text-[#8f9195] text-[12px]">{t.status}</p>
          </div>
          <div className="shrink-0 w-[48px]" />
        </div>

        {/* Table rows */}
        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
          {rows.map((row, idx) => (
            <div key={idx} className="bg-[#f5f7fa] rounded-[6px] w-full hover:bg-[#eef2ff] transition-colors cursor-pointer">
              <div className="flex flex-row items-center px-[0px] py-[8px] w-full">
                {/* Icon column — clock icon triggers timestamp replay */}
                <div className="shrink-0 w-[48px] flex items-center justify-center">
                  {onTimestampClick ? (
                    <button
                      onClick={(e) => { e.stopPropagation(); onTimestampClick(row); }}
                      className="flex items-center justify-center rounded-full border-0 bg-transparent cursor-pointer transition-colors hover:bg-[#e7edfe] size-[28px]"
                      title={isEn ? 'View ±30min events' : '查看前后30分钟事件'}
                    >
                      {row.iconType === 'overdue' ? (
                        <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                          <circle cx="7" cy="7" r="5.5" stroke="#8F9195" strokeWidth="1.2"/>
                          <path d="M7 4V7.2L9 8.8" stroke="#8F9195" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="11" cy="3" r="2.5" fill="#F51414"/>
                          <path d="M11 2V3.5" stroke="white" strokeWidth="0.8" strokeLinecap="round"/>
                        </svg>
                      ) : (
                        <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                          <circle cx="7" cy="7" r="5.5" stroke="#8F9195" strokeWidth="1.2"/>
                          <path d="M7 4V7.2L9 8.8" stroke="#8F9195" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                  ) : (
                    <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                      <circle cx="7" cy="7" r="5.5" stroke="#8F9195" strokeWidth="1.2"/>
                      <path d="M7 4V7.2L9 8.8" stroke="#8F9195" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                {/* Event type column */}
                <div className="flex-1 min-w-0 pr-[8px]">
                  <p className="font-['PingFang_SC:Regular',sans-serif] leading-[22px] text-[#141414] text-[14px] overflow-hidden text-ellipsis whitespace-nowrap">{row.eventType}</p>
                </div>
                {/* Event code column */}
                <div className="flex-1 min-w-0 pr-[8px]">
                  <p className="font-['PingFang_SC:Regular',sans-serif] leading-[22px] text-[#141414] text-[14px] overflow-hidden text-ellipsis whitespace-nowrap">{row.code}</p>
                </div>
                {/* Description column */}
                <div className="flex-1 min-w-0 pr-[8px]">
                  <p className="font-['PingFang_SC:Regular',sans-serif] leading-[22px] text-[#141414] text-[14px] overflow-hidden text-ellipsis whitespace-nowrap">{row.description}</p>
                </div>
                {/* Occurred at column */}
                <div className="flex-1 min-w-0 pr-[8px]">
                  <p className="font-['PingFang_SC:Regular',sans-serif] leading-[22px] text-[#141414] text-[14px] overflow-hidden text-ellipsis whitespace-nowrap">{row.occurredAt}</p>
                </div>
                {/* Status column */}
                <div className="shrink-0 w-[125px]">
                  {row.statusLabel ? (
                    <div className="flex items-center gap-[4px]">
                      <span style={{ color: row.statusColor }} className="text-[12px]">●</span>
                      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[22px] text-[14px]" style={{ color: row.statusColor }}>{row.statusLabel}</p>
                    </div>
                  ) : null}
                </div>
                {/* Arrow column */}
                <div className="shrink-0 w-[48px] flex items-center justify-center">
                  <svg width="6" height="10" fill="none" viewBox="0 0 6 10">
                    <path clipRule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L5.85355 5.14645C6.04882 5.34171 6.04882 5.65829 5.85355 5.85355L1.35355 9.35355C1.15829 9.54882 0.841709 9.54882 0.646447 9.35355C0.451184 9.15829 0.451184 8.84171 0.646447 8.64645L4.79289 5L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#8F9195" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-row items-center justify-between w-full pt-[4px]">
          <p className="font-['PingFang_SC:Regular',sans-serif] leading-[22px] text-[#8f9195] text-[12px]">
            {isEn ? `Total ${totalItems} items` : `共 ${totalItems} 项数据`}
          </p>
          <div className="flex flex-row items-center gap-[4px]">
            {getPaginationPages().map((page, idx) => (
              <button
                key={idx}
                onClick={() => typeof page === 'number' && setCurrentPage(page)}
                disabled={page === '...'}
                className={`min-w-[28px] h-[28px] px-[6px] flex items-center justify-center rounded-[4px] border border-solid text-[12px] font-['PingFang_SC:Regular',sans-serif] cursor-pointer transition-colors
                  ${page === currentPage ? 'bg-[#1450f5] border-[#1450f5] text-white' : page === '...' ? 'border-transparent text-[#8f9195] cursor-default' : 'bg-white border-[#dfe1e8] text-[#141414] hover:border-[#1450f5] hover:text-[#1450f5]'}`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}



function TimelineView({ language, timeRange }: { language: 'en' | 'cn'; timeRange: '24h' | '7' | '30' }) {
  const isEn = language === 'en';
  const [hoveredBlock, setHoveredBlock] = useState<{ startPx: number; timeStr: string } | null>(null);
  const [showScrollbar, setShowScrollbar] = useState(false);

  const labelColWidth = 108;
  const rowHeight = 36;
  const timeAxisHeight = 36;

  // per-range config
  const cfg = timeRange === '24h'
    ? { pxPerUnit: 20, totalUnits: 120, fixedDur: 2, doorDur: 1 }
    : timeRange === '7'
    ? { pxPerUnit: 30, totalUnits: 168, fixedDur: 2,   doorDur: 1 }
    : { pxPerUnit: 80, totalUnits: 30,  fixedDur: 0.5, doorDur: 0.25 };

  const FIXED_DUR = cfg.fixedDur;
  const DOOR_DUR  = cfg.doorDur;

  type TLEvent = {
    startUnit: number;
    durationUnit: number;
    label: string;
    bg: string;
    textColor: string;
    borderColor?: string;
  };

  type TLRow = {
    id: string;
    label: string;
    accentColor: string;
    variableWidth?: boolean;
    events: TLEvent[];
  };

  // Format hover tooltip time string
  const fmtTime = (startUnit: number): string => {
    if (timeRange === '24h') {
      const absMin = 9 * 60 + startUnit;
      return `${Math.floor(absMin / 60)}:${String(absMin % 60).padStart(2, '0')}`;
    }
    if (timeRange === '7') {
      const d = new Date(2026, 2, 16, startUnit);
      return `${d.getMonth() + 1}/${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:00`;
    }
    const d = new Date(2026, 1, 20 + Math.floor(startUnit));
    return `${d.getMonth() + 1}/${String(d.getDate()).padStart(2, '0')}`;
  };

  // 24h events (unit = minutes from 9:00)
  const events24h: Record<string, TLEvent[]> = {
    fault:    [
      { startUnit: 8,   durationUnit: FIXED_DUR, label: '10096', bg: '#FFF1F0', textColor: '#F51414', borderColor: '#FFCCC7' },
      { startUnit: 35,  durationUnit: FIXED_DUR, label: '15119', bg: '#FFF1F0', textColor: '#F51414', borderColor: '#FFCCC7' },
      { startUnit: 72,  durationUnit: FIXED_DUR, label: '20034', bg: '#FFF1F0', textColor: '#F51414', borderColor: '#FFCCC7' },
      { startUnit: 108, durationUnit: FIXED_DUR, label: '10096', bg: '#FFF1F0', textColor: '#F51414', borderColor: '#FFCCC7' },
    ],
    alarm:    [
      { startUnit: 15,  durationUnit: FIXED_DUR, label: isEn ? 'Alarm' : '警铃', bg: '#FFF7E6', textColor: '#D48806', borderColor: '#FFD591' },
      { startUnit: 62,  durationUnit: FIXED_DUR, label: isEn ? 'Alarm' : '警铃', bg: '#FFF7E6', textColor: '#D48806', borderColor: '#FFD591' },
      { startUnit: 100, durationUnit: FIXED_DUR, label: isEn ? 'Alarm' : '警铃', bg: '#FFF7E6', textColor: '#D48806', borderColor: '#FFD591' },
    ],
    mode:     [
      { startUnit: 30,  durationUnit: FIXED_DUR, label: isEn ? 'Normal→Insp' : '普通→检修', bg: '#EEF2FF', textColor: '#1450F5', borderColor: '#ADC0FB' },
      { startUnit: 60,  durationUnit: FIXED_DUR, label: isEn ? 'Insp→Normal' : '检修→普通', bg: '#EEF2FF', textColor: '#1450F5', borderColor: '#ADC0FB' },
      { startUnit: 85,  durationUnit: FIXED_DUR, label: isEn ? 'Normal→Fire' : '普通→消防', bg: '#EEF2FF', textColor: '#1450F5', borderColor: '#ADC0FB' },
    ],
    cn:       [
      { startUnit: 10,  durationUnit: FIXED_DUR, label: 'CN000007', bg: '#F9F0FF', textColor: '#722ED1', borderColor: '#D3ADF7' },
      { startUnit: 50,  durationUnit: FIXED_DUR, label: 'CN000012', bg: '#F9F0FF', textColor: '#722ED1', borderColor: '#D3ADF7' },
      { startUnit: 90,  durationUnit: FIXED_DUR, label: 'CN000003', bg: '#F9F0FF', textColor: '#722ED1', borderColor: '#D3ADF7' },
    ],
    sn:       [
      { startUnit: 22,  durationUnit: FIXED_DUR, label: 'SN000008', bg: '#E6FFFB', textColor: '#08979C', borderColor: '#87E8DE' },
      { startUnit: 75,  durationUnit: FIXED_DUR, label: 'SN000015', bg: '#E6FFFB', textColor: '#08979C', borderColor: '#87E8DE' },
    ],
    repair:   [
      { startUnit: 45,  durationUnit: FIXED_DUR, label: '00000000', bg: '#FFF2E8', textColor: '#AD2102', borderColor: '#FFBB96' },
      { startUnit: 115, durationUnit: FIXED_DUR, label: '00000001', bg: '#FFF2E8', textColor: '#AD2102', borderColor: '#FFBB96' },
    ],
    maint:    [
      { startUnit: 5,   durationUnit: FIXED_DUR, label: isEn ? 'Maint.' : '保养', bg: '#F6FFED', textColor: '#389E0D', borderColor: '#B7EB8F' },
      { startUnit: 95,  durationUnit: FIXED_DUR, label: isEn ? 'Maint.' : '保养', bg: '#F6FFED', textColor: '#389E0D', borderColor: '#B7EB8F' },
    ],
    movement: [
      { startUnit: 0,   durationUnit: 3,  label: isEn ? 'Idle 6F'    : '静止 6F',     bg: '#F5F5F5', textColor: '#8F9195' },
      { startUnit: 3,   durationUnit: 4,  label: isEn ? 'Up 6→12F'   : '上行 6→12F',  bg: '#EEF2FF', textColor: '#1450F5' },
      { startUnit: 7,   durationUnit: 5,  label: isEn ? 'Idle 12F'   : '静止 12F',    bg: '#F5F5F5', textColor: '#8F9195' },
      { startUnit: 12,  durationUnit: 6,  label: isEn ? 'Dn 12→1F'   : '下行 12→1F',  bg: '#E6FFFB', textColor: '#08979C' },
      { startUnit: 18,  durationUnit: 7,  label: isEn ? 'Idle 1F'    : '静止 1F',     bg: '#F5F5F5', textColor: '#8F9195' },
      { startUnit: 25,  durationUnit: 5,  label: isEn ? 'Up 1→8F'    : '上行 1→8F',   bg: '#EEF2FF', textColor: '#1450F5' },
      { startUnit: 30,  durationUnit: 5,  label: isEn ? 'Idle 8F'    : '静止 8F',     bg: '#F5F5F5', textColor: '#8F9195' },
      { startUnit: 35,  durationUnit: 7,  label: isEn ? 'Up 8→20F'   : '上行 8→20F',  bg: '#EEF2FF', textColor: '#1450F5' },
      { startUnit: 42,  durationUnit: 3,  label: isEn ? 'Idle 20F'   : '静止 20F',    bg: '#F5F5F5', textColor: '#8F9195' },
      { startUnit: 45,  durationUnit: 7,  label: isEn ? 'Dn 20→3F'   : '下行 20→3F',  bg: '#E6FFFB', textColor: '#08979C' },
      { startUnit: 52,  durationUnit: 8,  label: isEn ? 'Idle 3F'    : '静止 3F',     bg: '#F5F5F5', textColor: '#8F9195' },
      { startUnit: 60,  durationUnit: 8,  label: isEn ? 'Up 3→15F'   : '上行 3→15F',  bg: '#EEF2FF', textColor: '#1450F5' },
      { startUnit: 68,  durationUnit: 4,  label: isEn ? 'Idle 15F'   : '静止 15F',    bg: '#F5F5F5', textColor: '#8F9195' },
      { startUnit: 72,  durationUnit: 8,  label: isEn ? 'Dn 15→1F'   : '下行 15→1F',  bg: '#E6FFFB', textColor: '#08979C' },
      { startUnit: 80,  durationUnit: 8,  label: isEn ? 'Idle 1F'    : '静止 1F',     bg: '#F5F5F5', textColor: '#8F9195' },
      { startUnit: 88,  durationUnit: 7,  label: isEn ? 'Up 1→10F'   : '上行 1→10F',  bg: '#EEF2FF', textColor: '#1450F5' },
      { startUnit: 95,  durationUnit: 5,  label: isEn ? 'Idle 10F'   : '静止 10F',    bg: '#F5F5F5', textColor: '#8F9195' },
      { startUnit: 100, durationUnit: 8,  label: isEn ? 'Dn 10→2F'   : '下行 10→2F',  bg: '#E6FFFB', textColor: '#08979C' },
      { startUnit: 108, durationUnit: 7,  label: isEn ? 'Idle 2F'    : '静止 2F',     bg: '#F5F5F5', textColor: '#8F9195' },
      { startUnit: 115, durationUnit: 5,  label: isEn ? 'Up 2→8F'    : '上行 2→8F',   bg: '#EEF2FF', textColor: '#1450F5' },
    ],
    door:     [
      { startUnit: 7,   durationUnit: DOOR_DUR, label: isEn ? 'Open'  : '开门', bg: '#E6F7FF', textColor: '#096DD9', borderColor: '#91D5FF' },
      { startUnit: 8,   durationUnit: DOOR_DUR, label: isEn ? 'Close' : '关门', bg: '#F5F5F5', textColor: '#595959', borderColor: '#D9D9D9' },
      { startUnit: 12,  durationUnit: DOOR_DUR, label: isEn ? 'Open'  : '开门', bg: '#E6F7FF', textColor: '#096DD9', borderColor: '#91D5FF' },
      { startUnit: 13,  durationUnit: DOOR_DUR, label: isEn ? 'Close' : '关门', bg: '#F5F5F5', textColor: '#595959', borderColor: '#D9D9D9' },
      { startUnit: 25,  durationUnit: DOOR_DUR, label: isEn ? 'Open'  : '开门', bg: '#E6F7FF', textColor: '#096DD9', borderColor: '#91D5FF' },
      { startUnit: 26,  durationUnit: DOOR_DUR, label: isEn ? 'Close' : '关门', bg: '#F5F5F5', textColor: '#595959', borderColor: '#D9D9D9' },
      { startUnit: 35,  durationUnit: DOOR_DUR, label: isEn ? 'Open'  : '开门', bg: '#E6F7FF', textColor: '#096DD9', borderColor: '#91D5FF' },
      { startUnit: 36,  durationUnit: DOOR_DUR, label: isEn ? 'Close' : '关门', bg: '#F5F5F5', textColor: '#595959', borderColor: '#D9D9D9' },
      { startUnit: 45,  durationUnit: DOOR_DUR, label: isEn ? 'Open'  : '开门', bg: '#E6F7FF', textColor: '#096DD9', borderColor: '#91D5FF' },
      { startUnit: 46,  durationUnit: DOOR_DUR, label: isEn ? 'Close' : '关门', bg: '#F5F5F5', textColor: '#595959', borderColor: '#D9D9D9' },
      { startUnit: 60,  durationUnit: DOOR_DUR, label: isEn ? 'Open'  : '开门', bg: '#E6F7FF', textColor: '#096DD9', borderColor: '#91D5FF' },
      { startUnit: 61,  durationUnit: DOOR_DUR, label: isEn ? 'Close' : '关门', bg: '#F5F5F5', textColor: '#595959', borderColor: '#D9D9D9' },
      { startUnit: 72,  durationUnit: DOOR_DUR, label: isEn ? 'Open'  : '开门', bg: '#E6F7FF', textColor: '#096DD9', borderColor: '#91D5FF' },
      { startUnit: 73,  durationUnit: DOOR_DUR, label: isEn ? 'Close' : '关门', bg: '#F5F5F5', textColor: '#595959', borderColor: '#D9D9D9' },
      { startUnit: 88,  durationUnit: DOOR_DUR, label: isEn ? 'Open'  : '开门', bg: '#E6F7FF', textColor: '#096DD9', borderColor: '#91D5FF' },
      { startUnit: 89,  durationUnit: DOOR_DUR, label: isEn ? 'Close' : '关门', bg: '#F5F5F5', textColor: '#595959', borderColor: '#D9D9D9' },
      { startUnit: 100, durationUnit: DOOR_DUR, label: isEn ? 'Open'  : '开门', bg: '#E6F7FF', textColor: '#096DD9', borderColor: '#91D5FF' },
      { startUnit: 101, durationUnit: DOOR_DUR, label: isEn ? 'Close' : '关门', bg: '#F5F5F5', textColor: '#595959', borderColor: '#D9D9D9' },
      { startUnit: 115, durationUnit: DOOR_DUR, label: isEn ? 'Open'  : '开门', bg: '#E6F7FF', textColor: '#096DD9', borderColor: '#91D5FF' },
      { startUnit: 116, durationUnit: DOOR_DUR, label: isEn ? 'Close' : '关门', bg: '#F5F5F5', textColor: '#595959', borderColor: '#D9D9D9' },
    ],
  };

  // 7d events (unit = hours from 2026-03-16 00:00)
  const faultBg = { bg: '#FFF1F0', textColor: '#F51414', borderColor: '#FFCCC7' };
  const alarmBg = { bg: '#FFF7E6', textColor: '#D48806', borderColor: '#FFD591' };
  const modeBg  = { bg: '#EEF2FF', textColor: '#1450F5', borderColor: '#ADC0FB' };
  const cnBg    = { bg: '#F9F0FF', textColor: '#722ED1', borderColor: '#D3ADF7' };
  const snBg    = { bg: '#E6FFFB', textColor: '#08979C', borderColor: '#87E8DE' };
  const repBg   = { bg: '#FFF2E8', textColor: '#AD2102', borderColor: '#FFBB96' };
  const mntBg   = { bg: '#F6FFED', textColor: '#389E0D', borderColor: '#B7EB8F' };

  const mk7 = (h: number, label: string, style: typeof faultBg): TLEvent =>
    ({ startUnit: h, durationUnit: FIXED_DUR, label, ...style });

  const events7d: Record<string, TLEvent[]> = {
    fault:    [8,32,56,80,104,128,152].map((h,i) => mk7(h, ['10096','15119','20034','10096','15119','20034','10096'][i], faultBg)),
    alarm:    [15,39,63,87,111,135,159].map(h => mk7(h, isEn ? 'Alarm' : '警铃', alarmBg)),
    mode:     [30,54,78,102,126,150].map((h,i) => mk7(h, [isEn?'Norm→Insp':'普通→检修',isEn?'Insp→Norm':'检修→普通',isEn?'Norm→Fire':'普通→消防',isEn?'Norm→Insp':'普通→检修',isEn?'Insp→Norm':'检修→普通',isEn?'Norm→Fire':'普通→消防'][i], modeBg)),
    cn:       [10,34,58,82,106,130,154].map((h,i) => mk7(h, `CN0000${String(i+1).padStart(2,'0')}`, cnBg)),
    sn:       [22,46,70,94,118,142,166].map((h,i) => mk7(h, `SN0000${String(i+1).padStart(2,'0')}`, snBg)),
    repair:   [45,69,93,117,141,165].map((h,i) => mk7(h, `0000000${i}`, repBg)),
    maint:    [5,29,53,77,101,125,149].map(h => mk7(h, isEn ? 'Maint.' : '保养', mntBg)),
    movement: (() => {
      const blocks: TLEvent[] = [];
      const cycle = [
        { dur: 2, label: isEn ? 'Idle' : '静止', bg: '#F5F5F5', textColor: '#8F9195' },
        { dur: 3, label: isEn ? 'Up'   : '上行',  bg: '#EEF2FF', textColor: '#1450F5' },
        { dur: 2, label: isEn ? 'Idle' : '静止', bg: '#F5F5F5', textColor: '#8F9195' },
        { dur: 3, label: isEn ? 'Down' : '下行',  bg: '#E6FFFB', textColor: '#08979C' },
      ];
      let pos = 0;
      while (pos < 168) {
        for (const c of cycle) {
          if (pos >= 168) break;
          const dur = Math.min(c.dur, 168 - pos);
          blocks.push({ startUnit: pos, durationUnit: dur, label: c.label, bg: c.bg, textColor: c.textColor });
          pos += c.dur;
        }
      }
      return blocks;
    })(),
    door:     Array.from({ length: 28 }, (_, i) => {
      const h = i * 6;
      return [
        { startUnit: h,   durationUnit: DOOR_DUR, label: isEn ? 'Open'  : '开门', bg: '#E6F7FF', textColor: '#096DD9', borderColor: '#91D5FF' },
        { startUnit: h+1, durationUnit: DOOR_DUR, label: isEn ? 'Close' : '关门', bg: '#F5F5F5', textColor: '#595959', borderColor: '#D9D9D9' },
      ];
    }).flat().filter(e => e.startUnit < 168),
  };

  // 30d events (unit = days from 2026-02-20)
  const mk30 = (d: number, label: string, style: typeof faultBg): TLEvent =>
    ({ startUnit: d, durationUnit: FIXED_DUR, label, ...style });

  const events30d: Record<string, TLEvent[]> = {
    fault:    [0,3,7,11,15,19,24,28].map((d,i) => mk30(d, ['10096','15119','20034','10096','15119','20034','10096','10096'][i], faultBg)),
    alarm:    [1,4,8,12,16,20,25].map(d => mk30(d, isEn ? 'Alarm' : '警铃', alarmBg)),
    mode:     [2,5,9,13,17,21,26].map((d,i) => mk30(d, [isEn?'N→I':'普→检',isEn?'I→N':'检→普',isEn?'N→F':'普→消',isEn?'N→I':'普→检',isEn?'I→N':'检→普',isEn?'N→F':'普→消',isEn?'N→I':'普→检'][i], modeBg)),
    cn:       [0.5,3.5,7.5,11.5,15.5,19.5,24.5].map((d,i) => mk30(d, `CN0000${String(i+1).padStart(2,'0')}`, cnBg)),
    sn:       [1.5,4.5,8.5,12.5,16.5,20.5,25.5].map((d,i) => mk30(d, `SN0000${String(i+1).padStart(2,'0')}`, snBg)),
    repair:   [2.5,6,10,14,18,22,27].map((d,i) => mk30(d, `0000000${i}`, repBg)),
    maint:    [0.25,5,10,15,20,25,29].map(d => mk30(d, isEn ? 'Maint.' : '保养', mntBg)),
    movement: (() => {
      const blocks: TLEvent[] = [];
      const cycle = [
        { dur: 0.5, label: isEn ? 'Idle' : '静止', bg: '#F5F5F5', textColor: '#8F9195' },
        { dur: 0.5, label: isEn ? 'Up'   : '上行',  bg: '#EEF2FF', textColor: '#1450F5' },
        { dur: 0.5, label: isEn ? 'Idle' : '静止', bg: '#F5F5F5', textColor: '#8F9195' },
        { dur: 0.5, label: isEn ? 'Down' : '下行',  bg: '#E6FFFB', textColor: '#08979C' },
      ];
      let pos = 0;
      while (pos < 30) {
        for (const c of cycle) {
          if (pos >= 30) break;
          const dur = Math.min(c.dur, 30 - pos);
          blocks.push({ startUnit: pos, durationUnit: dur, label: c.label, bg: c.bg, textColor: c.textColor });
          pos += c.dur;
        }
      }
      return blocks;
    })(),
    door:     Array.from({ length: 30 }, (_, i) => ([
      { startUnit: i + 0.2, durationUnit: DOOR_DUR, label: isEn ? 'Open'  : '开门', bg: '#E6F7FF', textColor: '#096DD9', borderColor: '#91D5FF' },
      { startUnit: i + 0.4, durationUnit: DOOR_DUR, label: isEn ? 'Close' : '关门', bg: '#F5F5F5', textColor: '#595959', borderColor: '#D9D9D9' },
    ])).flat(),
  };

  const eventsMap = timeRange === '24h' ? events24h : timeRange === '7' ? events7d : events30d;

  const rows: TLRow[] = [
    { id: 'fault',    label: isEn ? 'Fault Msg'      : '故障消息',   accentColor: '#F51414',  events: eventsMap.fault    },
    { id: 'alarm',    label: isEn ? 'Alarm Msg'      : '警铃消息',   accentColor: '#FA8C16',  events: eventsMap.alarm    },
    { id: 'mode',     label: isEn ? 'Mode Change'    : '模式变化',   accentColor: '#1450F5',  events: eventsMap.mode     },
    { id: 'cn',       label: isEn ? 'Customer Notif' : '客户通知',   accentColor: '#722ED1',  events: eventsMap.cn       },
    { id: 'sn',       label: isEn ? 'Service Req'    : '服务需求',   accentColor: '#13C2C2',  events: eventsMap.sn       },
    { id: 'repair',   label: isEn ? 'Repair Order'   : '走修工单',   accentColor: '#FA541C',  events: eventsMap.repair   },
    { id: 'maint',    label: isEn ? 'Maint. Order'   : '保养工单',   accentColor: '#52C41A',  events: eventsMap.maint    },
    { id: 'movement', label: isEn ? 'Movement'       : '运行动态',   accentColor: '#4373F7',  events: eventsMap.movement, variableWidth: true },
    { id: 'door',     label: isEn ? 'Door Status'    : '开关门状态', accentColor: '#8F9195',  events: eventsMap.door     },
  ];

  // Build time markers
  type TMark = { unit: number; label: string; isMinor: boolean; isMedium: boolean; isMajor: boolean };
  const timeMarkers: TMark[] = [];
  if (timeRange === '24h') {
    for (let m = 0; m <= 120; m++) {
      const absMin = 9 * 60 + m;
      const h = Math.floor(absMin / 60), min = absMin % 60;
      const is30 = min % 30 === 0, is5 = min % 5 === 0;
      timeMarkers.push({ unit: m, label: is30 ? `${h}:${String(min).padStart(2,'0')}` : is5 ? `${h}:${String(min).padStart(2,'0')}` : '', isMinor: !is5, isMedium: is5 && !is30, isMajor: is30 });
    }
  } else if (timeRange === '7') {
    for (let h = 0; h <= 168; h++) {
      const d = new Date(2026, 2, 16, h);
      const dayH = d.getHours();
      const isMaj = dayH === 0;
      const isMed = dayH % 6 === 0 && !isMaj;
      const label = isMaj ? `${d.getMonth()+1}/${String(d.getDate()).padStart(2,'0')}` : isMed ? `${String(dayH).padStart(2,'0')}:00` : '';
      timeMarkers.push({ unit: h, label, isMinor: !isMed && !isMaj, isMedium: isMed, isMajor: isMaj });
    }
  } else {
    for (let d = 0; d <= 30; d++) {
      const date = new Date(2026, 1, 20 + d);
      timeMarkers.push({ unit: d, label: `${date.getMonth()+1}/${String(date.getDate()).padStart(2,'0')}`, isMinor: false, isMedium: false, isMajor: true });
    }
  }

  const totalWidth = cfg.totalUnits * cfg.pxPerUnit;

  const numRows = rows.length;

  return (
    <>
      <style>{`
        .tl-scroll::-webkit-scrollbar { height: 4px; }
        .tl-scroll::-webkit-scrollbar-track { background: transparent; }
        .tl-scroll::-webkit-scrollbar-thumb { border-radius: 2px; background: transparent; transition: background 0.2s; }
        .tl-scroll-show::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.18); }
      `}</style>
      <div className="bg-white w-full select-none">
        <div className="flex" style={{ height: numRows * rowHeight + timeAxisHeight }}>

          {/* Fixed left labels column */}
          <div className="shrink-0 border-r border-[#DFE1E8] bg-white z-10 flex flex-col" style={{ width: labelColWidth }}>
            {rows.map(row => (
              <div key={row.id} className="border-b border-[#DFE1E8] flex items-center px-[8px] gap-[6px]" style={{ height: rowHeight }}>
                <div className="shrink-0 w-[3px] rounded-[1px]" style={{ height: 14, backgroundColor: row.accentColor }} />
                <p className="text-[11px] font-['PingFang_SC:Regular',sans-serif] text-[#141414] leading-tight whitespace-nowrap overflow-hidden text-ellipsis">{row.label}</p>
              </div>
            ))}
            <div className="border-t border-[#DFE1E8] flex-1 bg-[#FAFBFC]" />
          </div>

          {/* Scrollable right area */}
          <div
            className={`flex-1 overflow-x-auto overflow-y-hidden tl-scroll${showScrollbar ? ' tl-scroll-show' : ''}`}
            onMouseEnter={() => setShowScrollbar(true)}
            onMouseLeave={() => { setShowScrollbar(false); setHoveredBlock(null); }}
          >
            <div style={{ width: totalWidth, height: '100%', position: 'relative', display: 'flex', flexDirection: 'column' }}>

              {/* Hover guide line */}
              {hoveredBlock && (
                <>
                  <div style={{
                    position: 'absolute', top: 0, bottom: timeAxisHeight,
                    left: hoveredBlock.startPx, width: 1, zIndex: 30, pointerEvents: 'none',
                    backgroundImage: 'repeating-linear-gradient(to bottom,#1450F5 0px,#1450F5 4px,transparent 4px,transparent 8px)',
                  }} />
                  <div style={{
                    position: 'absolute', top: 4, left: hoveredBlock.startPx + 5,
                    zIndex: 31, pointerEvents: 'none',
                    backgroundColor: '#1450F5', color: 'white',
                    fontSize: 10, fontFamily: "'PingFang SC',sans-serif",
                    padding: '2px 6px', borderRadius: 3, whiteSpace: 'nowrap',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.18)',
                  }}>
                    {hoveredBlock.timeStr}
                  </div>
                </>
              )}

              {/* Event rows */}
              {rows.map(row => (
                <div key={row.id} className="relative border-b border-[#DFE1E8]" style={{ height: rowHeight, flexShrink: 0 }}>
                  {/* Grid lines */}
                  {timeMarkers.filter(m => m.isMajor || m.isMedium).map(m => (
                    <div key={m.unit} className="absolute top-0 bottom-0 w-px" style={{ left: m.unit * cfg.pxPerUnit, backgroundColor: m.isMajor ? '#DFE1E8' : '#F0F2F5' }} />
                  ))}

                  {/* Event blocks */}
                  {row.events.map((ev, idx) => {
                    const wUnit = row.variableWidth ? ev.durationUnit : (row.id === 'door' ? DOOR_DUR : FIXED_DUR);
                    const blockW = Math.max(wUnit * cfg.pxPerUnit - 1, row.variableWidth ? 2 : 4);
                    if (blockW <= 0 || ev.durationUnit === 0) return null;
                    const startPx = ev.startUnit * cfg.pxPerUnit;
                    return (
                      <div
                        key={idx}
                        className="absolute rounded-[3px] flex items-center overflow-hidden cursor-default"
                        style={{ top: 4, bottom: 4, left: startPx + 1, width: blockW, backgroundColor: ev.bg, border: `1px solid ${ev.borderColor ?? 'transparent'}` }}
                        onMouseEnter={() => setHoveredBlock({ startPx, timeStr: fmtTime(ev.startUnit) })}
                        onMouseLeave={() => setHoveredBlock(null)}
                      >
                        <p className="text-[10px] font-['PingFang_SC:Regular',sans-serif] leading-none whitespace-nowrap overflow-hidden text-ellipsis px-[4px]" style={{ color: ev.textColor }}>
                          {ev.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              ))}

              {/* Time axis at bottom */}
              <div className="relative bg-[#FAFBFC] border-t border-[#DFE1E8] shrink-0" style={{ height: timeAxisHeight }}>
                {/* Hover guide line extension in axis */}
                {hoveredBlock && (
                  <div style={{ position: 'absolute', top: 0, height: 12, left: hoveredBlock.startPx, width: 1, background: '#1450F5', zIndex: 30, pointerEvents: 'none' }} />
                )}
                {timeMarkers.map(m => {
                  const tickH = m.isMajor ? 10 : m.isMedium ? 6 : 3;
                  return (
                    <div key={m.unit} className="absolute top-0 flex flex-col items-center" style={{ left: m.unit * cfg.pxPerUnit }}>
                      <div className="w-px" style={{ height: tickH, backgroundColor: m.isMajor ? '#595959' : '#C8CAD0' }} />
                      {m.label && (
                        <span style={{ fontSize: m.isMajor ? 10 : 9, color: m.isMajor ? '#595959' : '#ABADB2', marginTop: 2, transform: 'translateX(-50%)', display: 'block', whiteSpace: 'nowrap', fontFamily: "'PingFang SC',sans-serif" }}>
                          {m.label}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function TimestampReplayView({
  selectedEvent,
  onExit,
  language,
  t,
  embedded,
}: {
  selectedEvent: RowData;
  onExit: () => void;
  language: 'en' | 'cn';
  t: typeof translations.en;
  embedded?: boolean;
}) {
  const [replayMode, setReplayMode] = useState<'timeline' | 'list'>('timeline');
  const isEn = language === 'en';

  const categories = [
    { name: '运动记录', count: 0, color: '#7296F9' },
    { name: '呼叫记录', count: 2, color: '#FF7949' },
    { name: '故障消息', count: 2, color: '#FF7949' },
    { name: '警铃消息', count: 8, color: '#FFB145' },
    { name: '模式变化', count: 8, color: '#0DD2E1' },
    { name: '客户通知', count: 8, color: '#FFCB49' },
    { name: '服务需求', count: 8, color: '#C4A5FF' },
    { name: '走修工单', count: 8, color: '#C99100' },
    { name: '保养工单', count: 8, color: '#7296F9' },
  ];

  // Parse center time from selected event
  const centerDateStr = selectedEvent.occurredAt;
  const centerTime = new Date(centerDateStr.replace(' ', 'T'));
  const startTime = new Date(centerTime.getTime() - 30 * 60 * 1000);
  const endTime = new Date(centerTime.getTime() + 30 * 60 * 1000);

  const formatDateTime = (d: Date) => {
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  };
  const formatTime = (d: Date) => {
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
  };

  const timeRangeLabel = `${formatDateTime(startTime)} ～ ${formatDateTime(endTime)}`;

  // Mock events in the ±30 min window
  const replayEvents: RowData[] = [
    { iconType: 'magnifier', eventType: t.faultMessage, code: '15119', description: isEn ? 'Hall door contact opened during run' : '运行过程中厅门触点断开', occurredAt: formatDateTime(new Date(centerTime.getTime() - 5 * 60 * 1000)), statusLabel: isEn ? 'Restored' : '已恢复', statusColor: '#1ED273' },
    { iconType: 'magnifier', eventType: t.alarmMessage, code: '–', description: '–', occurredAt: formatDateTime(new Date(centerTime.getTime() - 12 * 60 * 1000)), statusLabel: '', statusColor: '' },
    { iconType: 'magnifier', eventType: t.modeChange, code: '–', description: isEn ? 'Normal → Inspection' : '普通模式→检修模式', occurredAt: formatDateTime(new Date(centerTime.getTime() - 18 * 60 * 1000)), statusLabel: '', statusColor: '' },
    selectedEvent,
    { iconType: 'magnifier', eventType: t.customerNotification, code: 'CN000009', description: isEn ? 'Elevator stopped' : '电梯停止', occurredAt: formatDateTime(new Date(centerTime.getTime() + 8 * 60 * 1000)), statusLabel: '', statusColor: '' },
    { iconType: 'magnifier', eventType: t.modeChange, code: '–', description: isEn ? 'Inspection → Normal' : '检修模式→普通模式', occurredAt: formatDateTime(new Date(centerTime.getTime() + 22 * 60 * 1000)), statusLabel: '', statusColor: '' },
  ];

  // Time axis ticks: every 5 min from -30 to +30 → 13 ticks
  const tickCount = 13;
  const tickMin = -30;
  const colPx = 80;
  const leftColPx = 136;
  const rowH = 36;

  // Mock event blocks on timeline
  const timelineBlocks: { catIdx: number; startMin: number; durationMin: number; color: string }[] = [
    { catIdx: 1, startMin: -20, durationMin: 3, color: '#FF7949' },
    { catIdx: 1, startMin: 5, durationMin: 4, color: '#FF7949' },
    { catIdx: 2, startMin: -8, durationMin: 5, color: '#FF7949' },
    { catIdx: 2, startMin: 0, durationMin: 3, color: '#FF7949' },
    { catIdx: 3, startMin: -15, durationMin: 8, color: '#FFB145' },
    { catIdx: 3, startMin: 10, durationMin: 6, color: '#FFB145' },
    { catIdx: 4, startMin: -25, durationMin: 4, color: '#0DD2E1' },
    { catIdx: 4, startMin: -5, durationMin: 3, color: '#0DD2E1' },
    { catIdx: 4, startMin: 15, durationMin: 5, color: '#0DD2E1' },
    { catIdx: 5, startMin: -18, durationMin: 6, color: '#FFCB49' },
    { catIdx: 5, startMin: 12, durationMin: 4, color: '#FFCB49' },
    { catIdx: 6, startMin: -10, durationMin: 5, color: '#C4A5FF' },
    { catIdx: 6, startMin: 20, durationMin: 3, color: '#C4A5FF' },
    { catIdx: 7, startMin: -22, durationMin: 4, color: '#C99100' },
    { catIdx: 7, startMin: 8, durationMin: 6, color: '#C99100' },
    { catIdx: 8, startMin: -12, durationMin: 5, color: '#7296F9' },
    { catIdx: 8, startMin: 18, durationMin: 4, color: '#7296F9' },
  ];

  const minToX = (min: number) => ((min - tickMin) / 5) * colPx;

  const innerContent = (
    <div className="flex flex-col gap-[12px] p-[16px] w-full">

          {/* Blue info banner */}
          <div className="bg-[#f3f6fe] rounded-[6px] flex items-center gap-[8px] px-[12px] py-[8px]">
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="shrink-0">
              <circle cx="8" cy="8" r="7" stroke="#1450F5" strokeWidth="1.2"/>
              <path d="M8 7v5" stroke="#1450F5" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="8" cy="5" r="0.8" fill="#1450F5"/>
            </svg>
            <p className="font-['PingFang_SC:Regular',sans-serif] text-[#141414] text-[14px] leading-[22px] flex-1">
              <span>{isEn ? 'Timestamp history view is active. ' : '当前已启用'}</span>
              <span className="font-['PingFang_SC:Medium',sans-serif]">{isEn ? '' : '时间戳历史浏览'}</span>
              <span>{isEn ? 'You can quickly view events within ±30 minutes of the selected event.' : '，可基于单条事件快速查看前后30分钟内相关事件。'}</span>
            </p>
            <button
              onClick={onExit}
              className="shrink-0 font-['PingFang_SC:Regular',sans-serif] text-[#1450f5] text-[14px] leading-[22px] whitespace-nowrap border-0 bg-transparent cursor-pointer hover:underline"
            >
              {isEn ? 'Exit Timestamp' : '退出时间戳'}
            </button>
          </div>

          {/* Controls row */}
          <div className="flex items-center justify-between w-full">
            {/* Toggle: timeline / list */}
            <div className="bg-[#dfe1e8] flex h-[24px] items-center p-[2px] rounded-[4px]">
              <button
                onClick={() => setReplayMode('timeline')}
                className={`flex gap-[2px] items-center px-[4px] rounded-[2px] h-full border-0 cursor-pointer transition-colors ${replayMode === 'timeline' ? 'bg-white' : 'bg-transparent'}`}
              >
                <svg width="12" height="10" fill="none" viewBox="0 0 12 10">
                  <rect x="0" y="0" width="12" height="2" rx="0.5" fill={replayMode === 'timeline' ? '#141414' : '#676A72'}/>
                  <rect x="0" y="4" width="12" height="2" rx="0.5" fill={replayMode === 'timeline' ? '#141414' : '#676A72'}/>
                  <rect x="0" y="8" width="12" height="2" rx="0.5" fill={replayMode === 'timeline' ? '#141414' : '#676A72'}/>
                </svg>
                <span className="font-['PingFang_SC:Regular',sans-serif] text-[12px] text-black leading-[20px]">{isEn ? 'Timeline' : '时间线'}</span>
              </button>
              <button
                onClick={() => setReplayMode('list')}
                className={`flex gap-[2px] items-center px-[4px] rounded-[2px] h-full border-0 cursor-pointer transition-colors ${replayMode === 'list' ? 'bg-white' : 'bg-transparent'}`}
              >
                <svg width="10" height="8" fill="none" viewBox="0 0 10 8">
                  <path clipRule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H9C9.55228 0 10 0.447715 10 1C10 1.55228 9.55228 2 9 2H1C0.447715 2 0 1.55228 0 1ZM0 4C0 3.44772 0.447715 3 1 3H9C9.55228 3 10 3.44772 10 4C10 4.55228 9.55228 5 9 5H1C0.447715 5 0 4.55228 0 4ZM1 6C0.447715 6 0 6.44772 0 7C0 7.55228 0.447715 8 1 8H9C9.55228 8 10 7.55228 10 7C10 6.44772 9.55228 6 9 6H1Z" fill={replayMode === 'list' ? '#11161A' : '#676A72'} fillRule="evenodd"/>
                </svg>
                <span className="font-['PingFang_SC:Regular',sans-serif] text-[12px] text-black leading-[20px]">{isEn ? 'List' : '列表'}</span>
              </button>
            </div>

            {/* Time range + export */}
            <div className="flex items-center gap-[8px]">
              <p className="font-['PingFang_SC:Medium',sans-serif] text-[#141414] text-[14px] leading-[22px] whitespace-nowrap">{timeRangeLabel}</p>
              <button className="bg-[#1450f5] text-white font-['PingFang_SC:Regular',sans-serif] text-[12px] leading-[20px] px-[8px] py-[2px] rounded-[4px] border-0 cursor-pointer hover:bg-[#1040d5]">
                {isEn ? 'Export' : '导出数据'}
              </button>
            </div>
          </div>

          {replayMode === 'timeline' ? (
            /* Timeline (Gantt) view — left col fixed, right area scrolls together */
            <div className="w-full rounded-[4px] border border-[#dfe1e8] flex overflow-hidden">
              {/* Fixed left column */}
              <div className="shrink-0 border-r border-[#dfe1e8]" style={{ width: leftColPx }}>
                {/* Header cell */}
                <div className="bg-[#f5f7fa] border-b border-[#dfe1e8] flex flex-col gap-[4px] px-[12px] py-[8px]" style={{ height: rowH + 40 }}>
                  <p className="font-['PingFang_SC:Semibold',sans-serif] text-[#141414] text-[14px] leading-[22px] whitespace-nowrap">{isEn ? 'Total Events' : '事件总计'}</p>
                  <p className="font-['PingFang_SC:Medium',sans-serif] text-[#676a72] text-[14px] leading-[22px]">(28)</p>
                </div>
                {/* Category label cells */}
                {categories.map((cat, catIdx) => (
                  <div key={catIdx} className="bg-[#f5f7fa] border-b border-[#dfe1e8] flex items-center justify-between px-[12px] py-[8px]" style={{ height: rowH }}>
                    <p className="font-['PingFang_SC:Medium',sans-serif] text-[#141414] text-[12px] leading-[20px] whitespace-nowrap truncate">
                      {cat.name}{cat.count > 0 ? `（${cat.count}）` : ''}
                    </p>
                    <div className="rounded-full shrink-0 ml-[4px]" style={{ width: 8, height: 8, backgroundColor: cat.color, opacity: cat.count === 0 ? 0 : 1 }} />
                  </div>
                ))}
              </div>

              {/* Scrollable right area */}
              <div className="flex-1 overflow-x-auto">
                <div style={{ width: tickCount * colPx }}>
                  {/* Time axis header */}
                  <div className="flex border-b border-[#dfe1e8]" style={{ height: rowH + 40 }}>
                    {Array.from({ length: tickCount }, (_, i) => {
                      const minOffset = tickMin + i * 5;
                      const tickTime = new Date(centerTime.getTime() + minOffset * 60 * 1000);
                      const isCenterCol = minOffset === 0;
                      return (
                        <div
                          key={i}
                          className={`shrink-0 border-r border-[#dfe1e8] flex items-end pb-[4px] pl-[2px] ${isCenterCol ? 'bg-[#e7edfe]' : 'bg-[#f5f7fa]'}`}
                          style={{ width: colPx }}
                        >
                          <span className="font-['PingFang_SC:Medium',sans-serif] text-[#676a72] text-[12px] leading-[20px] whitespace-nowrap">
                            {formatTime(tickTime)}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Category Gantt rows */}
                  {categories.map((cat, catIdx) => (
                    <div key={catIdx} className="relative bg-white border-b border-[#dfe1e8]" style={{ width: tickCount * colPx, height: rowH }}>
                      {/* Vertical grid lines */}
                      {Array.from({ length: tickCount }, (_, i) => {
                        const minOffset = tickMin + i * 5;
                        const isCenterCol = minOffset === 0;
                        return (
                          <div
                            key={i}
                            className={`absolute top-0 bottom-0 ${isCenterCol ? 'border-r-2 border-[#a1b9fb] bg-[#f3f6fe]' : 'border-r border-dashed border-[#dfe1e8]'}`}
                            style={{ left: i * colPx, width: colPx }}
                          />
                        );
                      })}
                      {/* Event blocks */}
                      {timelineBlocks
                        .filter(b => b.catIdx === catIdx)
                        .map((block, bi) => {
                          const x = minToX(block.startMin);
                          const w = (block.durationMin / 5) * colPx;
                          return (
                            <div
                              key={bi}
                              className="absolute top-[6px] rounded-[2px] opacity-80 hover:opacity-100 cursor-pointer z-10"
                              style={{ left: x, width: Math.max(w, 12), height: rowH - 12, backgroundColor: block.color }}
                            />
                          );
                        })
                      }
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* List view */
            <div className="w-full">
              {/* Table header */}
              <div className="w-full flex flex-row items-center bg-[#f5f7fa] border-b border-[#dfe1e8] py-[8px]">
                <div className="shrink-0 w-[32px]" />
                <div className="flex-1 min-w-0 px-[16px]">
                  <p className="font-['PingFang_SC:Regular',sans-serif] text-[#8f9195] text-[12px] leading-[20px]">{isEn ? 'Event Type' : '事件类型'}</p>
                </div>
                <div className="flex-1 min-w-0 px-[16px]">
                  <p className="font-['PingFang_SC:Regular',sans-serif] text-[#8f9195] text-[12px] leading-[20px]">{isEn ? 'Event Code' : '事件代码'}</p>
                </div>
                <div className="flex-1 min-w-0 px-[16px]">
                  <p className="font-['PingFang_SC:Regular',sans-serif] text-[#8f9195] text-[12px] leading-[20px]">{isEn ? 'Description' : '描述'}</p>
                </div>
                <div className="flex-1 min-w-0 px-[16px]">
                  <p className="font-['PingFang_SC:Regular',sans-serif] text-[#8f9195] text-[12px] leading-[20px]">{isEn ? 'Occurred At' : '发生时间'}</p>
                </div>
                <div className="shrink-0 w-[100px] px-[16px]">
                  <p className="font-['PingFang_SC:Regular',sans-serif] text-[#8f9195] text-[12px] leading-[20px]">{isEn ? 'Status' : '状态'}</p>
                </div>
              </div>

              {/* Rows */}
              {replayEvents.map((ev, idx) => {
                const isSelected = ev === selectedEvent;
                return (
                  <div
                    key={idx}
                    className={`flex flex-row items-center border-b border-[#dfe1e8] py-[12px] transition-colors ${isSelected ? 'bg-[#e7edfe]' : 'bg-white hover:bg-[#f5f7fa]'}`}
                  >
                    {/* @ indicator for selected */}
                    <div className="shrink-0 w-[32px] flex items-center justify-center">
                      {isSelected && (
                        <span className="font-['PingFang_SC:Medium',sans-serif] text-[#1450f5] text-[14px] leading-[22px]">@</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0 px-[16px]">
                      <p className={`font-['PingFang_SC:${isSelected ? 'Medium' : 'Regular'}',sans-serif] text-[#141414] text-[14px] leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap`}>{ev.eventType}</p>
                    </div>
                    <div className="flex-1 min-w-0 px-[16px]">
                      <p className="font-['PingFang_SC:Regular',sans-serif] text-[#141414] text-[14px] leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap">{ev.code}</p>
                    </div>
                    <div className="flex-1 min-w-0 px-[16px]">
                      <p className="font-['PingFang_SC:Regular',sans-serif] text-[#141414] text-[14px] leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap">{ev.description}</p>
                    </div>
                    <div className="flex-1 min-w-0 px-[16px]">
                      <p className="font-['PingFang_SC:Regular',sans-serif] text-[#141414] text-[14px] leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap">{ev.occurredAt}</p>
                    </div>
                    <div className="shrink-0 w-[100px] px-[16px]">
                      {ev.statusLabel ? (
                        <div className="flex items-center gap-[4px]">
                          <span style={{ color: ev.statusColor }} className="text-[12px]">●</span>
                          <p className="font-['PingFang_SC:Regular',sans-serif] text-[14px] leading-[22px]" style={{ color: ev.statusColor }}>{ev.statusLabel}</p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

    </div>
  );

  if (embedded) {
    return innerContent;
  }

  return (
    <div className="rounded-[8px] mt-0 relative bg-white" data-name="时间戳回顾">
      <div aria-hidden="true" className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-start overflow-clip rounded-[8px]">
        {/* Header */}
        <div className="bg-[#fafbfc] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center justify-between px-[12px] py-[9px]">
            <Frame14 t={t} />
          </div>
        </div>
        {innerContent}
      </div>
    </div>
  );
}

function EventsContent({ t, language }: { t: typeof translations.en; language: 'en' | 'cn' }) {
  const [viewMode, setViewMode] = useState<'table' | 'timeline'>('table');
  const [timeRange, setTimeRange] = useState<'24h' | '7' | '30'>('24h');
  const [selectedEvent, setSelectedEvent] = useState<RowData | null>(null);
  const isEn = language === 'en';

  if (selectedEvent) {
    return (
      <TimestampReplayView
        selectedEvent={selectedEvent}
        onExit={() => setSelectedEvent(null)}
        language={language}
        t={t}
      />
    );
  }

  return (
    <div className="rounded-[8px] mt-0 relative" data-name="设备事件">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#fafbfc] relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center pb-[9px] pt-[8px] px-[12px] relative size-full">
              <Frame14 t={t} />
            </div>
          </div>
        </div>

        {/* Right controls: view toggle + time range buttons + date pickers */}
        <div className="absolute flex items-center gap-[8px] right-[12px] top-[8px]">
          {/* View mode toggle */}
          <div className="bg-[#dfe1e8] flex gap-[4px] items-center p-[2px] rounded-[4px]">
            <button
              onClick={() => setViewMode('table')}
              className={`relative rounded-[2px] shrink-0 px-[8px] py-[2px] border-0 cursor-pointer transition-colors ${viewMode === 'table' ? 'bg-white' : 'bg-transparent'}`}
              title={isEn ? 'Table view' : '表格视图'}
            >
              <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                <rect x="0.5" y="0.5" width="13" height="13" rx="1" stroke={viewMode === 'table' ? '#141414' : '#676A72'} strokeWidth="1"/>
                <line x1="0.5" y1="4.5" x2="13.5" y2="4.5" stroke={viewMode === 'table' ? '#141414' : '#676A72'} strokeWidth="1"/>
                <line x1="0.5" y1="9.5" x2="13.5" y2="9.5" stroke={viewMode === 'table' ? '#141414' : '#676A72'} strokeWidth="1"/>
                <line x1="4.5" y1="4.5" x2="4.5" y2="13.5" stroke={viewMode === 'table' ? '#141414' : '#676A72'} strokeWidth="1"/>
              </svg>
            </button>
            <button
              onClick={() => setViewMode('timeline')}
              className={`relative rounded-[2px] shrink-0 px-[8px] py-[2px] border-0 cursor-pointer transition-colors ${viewMode === 'timeline' ? 'bg-white' : 'bg-transparent'}`}
              title={isEn ? 'Timeline view' : '时间线视图'}
            >
              <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                <rect x="0" y="2" width="5" height="3" rx="1" fill={viewMode === 'timeline' ? '#141414' : '#676A72'}/>
                <rect x="6" y="2" width="8" height="3" rx="1" fill={viewMode === 'timeline' ? '#141414' : '#676A72'}/>
                <rect x="0" y="6" width="8" height="3" rx="1" fill={viewMode === 'timeline' ? '#141414' : '#676A72'}/>
                <rect x="9" y="6" width="5" height="3" rx="1" fill={viewMode === 'timeline' ? '#141414' : '#676A72'}/>
                <rect x="2" y="10" width="6" height="3" rx="1" fill={viewMode === 'timeline' ? '#141414' : '#676A72'}/>
              </svg>
            </button>
          </div>

          {/* Time range: individual bordered buttons */}
          <button
            onClick={() => setTimeRange('24h')}
            className={`flex items-center justify-center px-[10px] h-[26px] rounded-[4px] border border-solid text-[12px] font-['PingFang_SC:Regular',sans-serif] cursor-pointer transition-colors bg-white whitespace-nowrap
              ${timeRange === '24h' ? 'border-[#1450f5] text-[#1450f5]' : 'border-[#c8cad0] text-[#141414]'}`}
          >
            {t.last24Hours}
          </button>
          <button
            onClick={() => setTimeRange('7')}
            className={`flex items-center justify-center px-[10px] h-[26px] rounded-[4px] border border-solid text-[12px] font-['PingFang_SC:Regular',sans-serif] cursor-pointer transition-colors bg-white whitespace-nowrap
              ${timeRange === '7' ? 'border-[#1450f5] text-[#1450f5]' : 'border-[#c8cad0] text-[#141414]'}`}
          >
            {t.last7Days}
          </button>
          <button
            onClick={() => setTimeRange('30')}
            className={`flex items-center justify-center px-[10px] h-[26px] rounded-[4px] border border-solid text-[12px] font-['PingFang_SC:Regular',sans-serif] cursor-pointer transition-colors bg-white whitespace-nowrap
              ${timeRange === '30' ? 'border-[#1450f5] text-[#1450f5]' : 'border-[#c8cad0] text-[#141414]'}`}
          >
            {t.last30Days}
          </button>

          {/* Date pickers */}
          <div className="flex items-center h-[26px] w-[152px] rounded-[4px] border border-solid border-[#c8cad0] bg-white px-[8px] gap-[6px]">
            <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
              <rect x="1" y="2" width="10" height="9" rx="1" stroke="#8F9195" strokeWidth="1"/>
              <line x1="1" y1="5" x2="11" y2="5" stroke="#8F9195" strokeWidth="1"/>
              <line x1="4" y1="1" x2="4" y2="3" stroke="#8F9195" strokeWidth="1"/>
              <line x1="8" y1="1" x2="8" y2="3" stroke="#8F9195" strokeWidth="1"/>
            </svg>
            <p className="font-['PingFang_SC:Regular',sans-serif] text-[12px] text-[#8f9195] whitespace-nowrap overflow-hidden text-ellipsis flex-1">
              {isEn ? 'Start Date' : '请选择开始日期'}
            </p>
          </div>
          <div className="flex items-center h-[26px] w-[152px] rounded-[4px] border border-solid border-[#c8cad0] bg-white px-[8px] gap-[6px]">
            <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
              <rect x="1" y="2" width="10" height="9" rx="1" stroke="#8F9195" strokeWidth="1"/>
              <line x1="1" y1="5" x2="11" y2="5" stroke="#8F9195" strokeWidth="1"/>
              <line x1="4" y1="1" x2="4" y2="3" stroke="#8F9195" strokeWidth="1"/>
              <line x1="8" y1="1" x2="8" y2="3" stroke="#8F9195" strokeWidth="1"/>
            </svg>
            <p className="font-['PingFang_SC:Regular',sans-serif] text-[12px] text-[#8f9195] whitespace-nowrap overflow-hidden text-ellipsis flex-1">
              {isEn ? 'End Date' : '请选择结束日期'}
            </p>
          </div>
        </div>

        {viewMode === 'table' ? (
          <EventsTableView t={t} onTimestampClick={setSelectedEvent} />
        ) : (
          <TimelineView language={language} timeRange={timeRange} />
        )}
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function EventsTabContent({ t, language }: { t: typeof translations.en; language: 'en' | 'cn' }) {
  const [timeRange, setTimeRange] = useState<'24h' | '7' | '30'>('24h');
  const [selectedEvent, setSelectedEvent] = useState<RowData | null>(null);
  const isEn = language === 'en';

  return (
    <div className="rounded-[8px] relative bg-white border border-[#dfe1e8]">
      {/* Unified card header */}
      <div className="bg-[#fafbfc] relative shrink-0 w-full rounded-t-[8px] border-b border-[#dfe1e8]">
        <div className="flex flex-row items-center px-[12px] py-[9px]">
          <Frame14 t={t} />
        </div>
        {/* Absolutely positioned right controls */}
        <div className="absolute flex items-center gap-[8px] right-[12px] top-[8px]">
          {/* Time range buttons */}
          <button
            onClick={() => setTimeRange('24h')}
            className={`flex items-center justify-center px-[10px] h-[26px] rounded-[4px] border border-solid text-[12px] font-['PingFang_SC:Regular',sans-serif] cursor-pointer transition-colors bg-white whitespace-nowrap ${timeRange === '24h' ? 'border-[#1450f5] text-[#1450f5]' : 'border-[#c8cad0] text-[#141414]'}`}
          >
            {t.last24Hours}
          </button>
          <button
            onClick={() => setTimeRange('7')}
            className={`flex items-center justify-center px-[10px] h-[26px] rounded-[4px] border border-solid text-[12px] font-['PingFang_SC:Regular',sans-serif] cursor-pointer transition-colors bg-white whitespace-nowrap ${timeRange === '7' ? 'border-[#1450f5] text-[#1450f5]' : 'border-[#c8cad0] text-[#141414]'}`}
          >
            {t.last7Days}
          </button>
          <button
            onClick={() => setTimeRange('30')}
            className={`flex items-center justify-center px-[10px] h-[26px] rounded-[4px] border border-solid text-[12px] font-['PingFang_SC:Regular',sans-serif] cursor-pointer transition-colors bg-white whitespace-nowrap ${timeRange === '30' ? 'border-[#1450f5] text-[#1450f5]' : 'border-[#c8cad0] text-[#141414]'}`}
          >
            {t.last30Days}
          </button>
          {/* Date pickers */}
          <div className="flex items-center h-[26px] w-[152px] rounded-[4px] border border-solid border-[#c8cad0] bg-white px-[8px] gap-[6px]">
            <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
              <rect x="1" y="2" width="10" height="9" rx="1" stroke="#8F9195" strokeWidth="1"/>
              <line x1="1" y1="5" x2="11" y2="5" stroke="#8F9195" strokeWidth="1"/>
              <line x1="4" y1="1" x2="4" y2="3" stroke="#8F9195" strokeWidth="1"/>
              <line x1="8" y1="1" x2="8" y2="3" stroke="#8F9195" strokeWidth="1"/>
            </svg>
            <p className="font-['PingFang_SC:Regular',sans-serif] text-[12px] text-[#8f9195] whitespace-nowrap overflow-hidden text-ellipsis flex-1">
              {isEn ? 'Start Date' : '请选择开始日期'}
            </p>
          </div>
          <div className="flex items-center h-[26px] w-[152px] rounded-[4px] border border-solid border-[#c8cad0] bg-white px-[8px] gap-[6px]">
            <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
              <rect x="1" y="2" width="10" height="9" rx="1" stroke="#8F9195" strokeWidth="1"/>
              <line x1="1" y1="5" x2="11" y2="5" stroke="#8F9195" strokeWidth="1"/>
              <line x1="4" y1="1" x2="4" y2="3" stroke="#8F9195" strokeWidth="1"/>
              <line x1="8" y1="1" x2="8" y2="3" stroke="#8F9195" strokeWidth="1"/>
            </svg>
            <p className="font-['PingFang_SC:Regular',sans-serif] text-[12px] text-[#8f9195] whitespace-nowrap overflow-hidden text-ellipsis flex-1">
              {isEn ? 'End Date' : '请选择结束日期'}
            </p>
          </div>
        </div>
      </div>

      {/* Card content */}
      <div className="flex flex-col gap-[16px] p-[16px]">
        {/* 事件统计 section */}
        <EventStatisticsCard t={t} />

        {/* 所有事件 section or timestamp replay */}
        {selectedEvent ? (
          <TimestampReplayView
            selectedEvent={selectedEvent}
            onExit={() => setSelectedEvent(null)}
            language={language}
            t={t}
            embedded
          />
        ) : (
          <div>
            <p className="font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic text-[#141414] text-[14px] whitespace-nowrap pb-[8px]">{t.allEvents}</p>
            <EventsTableView t={t} onTimestampClick={setSelectedEvent} />
          </div>
        )}
      </div>
    </div>
  );
}

function ModuleUnderDevelopment({ language }: { language: "en" | "cn" }) {
  const isChinese = language === "cn";
  return <section className="flex min-h-[360px] items-center justify-center rounded-[8px] border border-[#dfe1e8] bg-white" aria-label={isChinese ? "模块开发中" : "Module under development"}>
    <div className="flex flex-col items-center gap-3 px-6 text-center">
      <div className="flex size-12 items-center justify-center rounded-full bg-[#f3f6fe] text-[20px] font-semibold text-[#1450f5]">···</div>
      <h1 className="text-[18px] font-semibold leading-[26px] text-[#141414]">{isChinese ? "模块开发中" : "Module under development"}</h1>
      <p className="text-[14px] leading-[22px] text-[#676a72]">{isChinese ? "该功能正在建设中，敬请期待。" : "This module is currently under development."}</p>
    </div>
  </section>;
}

function OperationRecordsContent({ t }: { t: typeof translations.en }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 11;
  const totalItems = 101;

  type StatusKey = 'queued' | 'inProgress' | 'success' | 'failed';
  const isEn = t.employeeId === 'Employee ID';
  const personName = isEn ? 'Zhang San' : '张三';
  const actionSysUpgrade = isEn ? '210X System Upgrade / Nexus-D System Upgrade' : '210X系统升级 / Nexus-D系统升级';
  const actionLogUpload  = isEn ? '210X Log Upload'   : '210X日志上传';
  const actionRestart    = isEn ? '210X Restart'      : '210X重新启动';
  const actionConfigUpd  = isEn ? '210X Config Update / Nexus-D Config Update' : '210X更新配置 / Nexus-D更新配置';
  const mockData: Array<{
    opType: string;
    employeeId: string;
    name: string;
    email: string;
    action: string;
    statusKey: StatusKey;
    masked?: boolean;
    showEye?: boolean;
  }> = [
    { opType: t.systemUpgrade,      employeeId: '******',   name: '*****',      email: '******',               action: actionSysUpgrade,    statusKey: 'queued',     masked: true },
    { opType: t.logUpload,          employeeId: '64151234', name: personName,   email: 'san.zhang@kone.com',   action: actionLogUpload,     statusKey: 'inProgress', showEye: true },
    { opType: t.deviceRegistration, employeeId: '64151234', name: personName,   email: 'san.zhang@kone.com',   action: t.deviceRegistration,statusKey: 'success' },
    { opType: t.deviceUnbind,       employeeId: '64151234', name: personName,   email: 'san.zhang@kone.com',   action: t.deviceUnbind,      statusKey: 'failed' },
    { opType: t.deviceRestart,      employeeId: '64151234', name: personName,   email: 'san.zhang@kone.com',   action: actionRestart,       statusKey: 'success' },
    { opType: t.configUpdate,       employeeId: '64151234', name: personName,   email: 'san.zhang@kone.com',   action: actionConfigUpd,     statusKey: 'success' },
    { opType: t.configUpdate,       employeeId: '64151234', name: personName,   email: 'san.zhang@kone.com',   action: actionConfigUpd,     statusKey: 'success' },
    { opType: t.configUpdate,       employeeId: '64151234', name: personName,   email: 'san.zhang@kone.com',   action: actionConfigUpd,     statusKey: 'success' },
    { opType: t.configUpdate,       employeeId: '64151234', name: personName,   email: 'san.zhang@kone.com',   action: actionConfigUpd,     statusKey: 'success' },
    { opType: t.configUpdate,       employeeId: '64151234', name: personName,   email: 'san.zhang@kone.com',   action: actionConfigUpd,     statusKey: 'success' },
  ];

  const statusConfig: Record<StatusKey, { color: string; label: string }> = {
    queued:     { color: '#ABADB2', label: t.queued },
    inProgress: { color: '#1450F5', label: t.inProgress },
    success:    { color: '#1ED273', label: t.successStatus },
    failed:     { color: '#F51414', label: t.failedStatus },
  };

  const getPaginationPages = () => {
    const pages: (number | '...')[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1, 2, 3, 4, 5);
      pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="rounded-[8px] relative" data-name="操作记录">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        {/* Card Header */}
        <div className="bg-[#fafbfc] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center pb-[9px] pt-[8px] px-[12px] relative size-full">
              <div className="relative shrink-0">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                  <div className="bg-[#4373f7] h-[14px] rounded-[1px] shrink-0 w-[4px]" />
                  <p className="font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">{t.opRecordsTitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Form */}
        <div className="bg-white relative shrink-0 w-full px-[16px] pt-[16px] pb-[0px]">
          <div className="content-stretch flex gap-[20px] items-end relative w-full">
            {/* User Query */}
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pb-[24px] relative">
              <div className="content-stretch flex items-center pb-[8px] relative shrink-0 w-full">
                <p className="font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px]">{t.userQuery}</p>
              </div>
              <div className="bg-white relative rounded-[4px] shrink-0 w-full border border-[#c8cad0]">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[5px] relative size-full">
                    <div className="flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular',sans-serif] h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">
                      <p className="leading-[22px] overflow-hidden text-ellipsis">{t.searchUserPlaceholder}</p>
                    </div>
                    <svg className="shrink-0 h-[5.38px] w-[8.92px]" fill="none" viewBox="0 0 8.91924 5.37886">
                      <path d="M0 0.919239L0.919239 0L4.45962 3.54038L8 0L8.91924 0.919239L4.45962 5.37886L0 0.919239Z" fill="#8F9195" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Operation Type */}
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pb-[24px] relative">
              <div className="content-stretch flex items-center pb-[8px] relative shrink-0 w-full">
                <p className="font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px]">{t.opType}</p>
              </div>
              <div className="bg-white relative rounded-[4px] shrink-0 w-full border border-[#c8cad0]">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[5px] relative size-full">
                    <div className="flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular',sans-serif] h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">
                      <p className="leading-[22px] overflow-hidden text-ellipsis">{t.pleaseSelect}</p>
                    </div>
                    <svg className="shrink-0 h-[5.38px] w-[8.92px]" fill="none" viewBox="0 0 8.91924 5.37886">
                      <path d="M0 0.919239L0.919239 0L4.45962 3.54038L8 0L8.91924 0.919239L4.45962 5.37886L0 0.919239Z" fill="#8F9195" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Operation Date */}
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pb-[24px] relative">
              <div className="content-stretch flex items-center pb-[8px] relative shrink-0 w-full">
                <p className="font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px]">{t.opDate}</p>
              </div>
              <div className="bg-white relative rounded-[4px] shrink-0 w-full border border-[#c8cad0]">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center pl-[4px] pr-[8px] py-[4px] relative size-full gap-[2px]">
                    <div className="flex-[1_0_0] min-w-px relative rounded-[3px]">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex items-start px-[4px] py-px relative size-full">
                          <div className="flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular',sans-serif] h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">
                            <p className="leading-[22px] overflow-hidden text-ellipsis">{t.startDate}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="font-['PingFang_SC:Regular',sans-serif] text-[#8f9195] text-[14px] shrink-0">-</p>
                    <div className="flex-[1_0_0] min-w-px relative rounded-[3px]">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex items-start px-[4px] py-px relative size-full">
                          <div className="flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular',sans-serif] h-[22px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">
                            <p className="leading-[22px] overflow-hidden text-ellipsis">{t.endDate}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[8px] shrink-0 w-[8px]" />
                    <svg className="overflow-clip relative shrink-0 size-[16px]" fill="none" viewBox="0 0 12 12.5">
                      <path d="M8 1.5H4L4 0H3L3 1.5H1C0.447715 1.5 0 1.94771 0 2.5V11.5C0 12.0523 0.447715 12.5 1 12.5H11C11.5523 12.5 12 12.0523 12 11.5V2.5C12 1.94772 11.5523 1.5 11 1.5H9V0H8L8 1.5ZM3 3.5L4 3.5L4 2.5H8L8 3.5L9 3.5V2.5H11V4.5H1V2.5H3L3 3.5ZM1 5.5H11V11.5H1L1 5.5Z" fill="#8F9195" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Buttons */}
            <div className="content-stretch flex gap-[8px] items-start pt-[30px] pb-[24px] relative shrink-0">
              <div className="bg-[#f2f4f7] content-stretch flex h-[32px] items-center justify-center overflow-clip px-[16px] py-[5px] relative rounded-[4px] shrink-0 cursor-pointer">
                <p className="font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#141414] text-[14px] text-center whitespace-nowrap">{t.resetBtn}</p>
              </div>
              <div className="bg-[#1450f5] content-stretch flex h-[32px] items-center justify-center px-[16px] py-[5px] relative rounded-[4px] shrink-0 cursor-pointer">
                <p className="font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-white text-[14px] text-center whitespace-nowrap">{t.queryBtn}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white relative shrink-0 w-full px-[16px]">
          <div className="relative rounded-[6px] w-full" data-name="Table 表格(column 列模式)">
            <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
              <div className="content-stretch flex items-start relative w-full">
                {/* Operation Type Column: w-[92px] */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[92px]">
                  <div aria-hidden="true" className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none" />
                  <div className="bg-[#f5f7fa] relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
                        <p className="flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">{t.opType}</p>
                      </div>
                    </div>
                  </div>
                  {mockData.map((row, idx) => (
                    <div key={idx} className="bg-white relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center px-[16px] py-[11px] relative size-full">
                          <div className="bg-[#f5f7fa] content-stretch flex gap-[2px] items-center px-[6px] py-[2px] relative rounded-[3px] shrink-0">
                            <div aria-hidden="true" className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[3px]" />
                            <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#333740] text-[12px] whitespace-nowrap">{row.opType}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Employee ID Column: w-[164px] */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[164px]">
                  <div aria-hidden="true" className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none" />
                  <div className="bg-[#f5f7fa] relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
                        <p className="flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">{t.employeeId}</p>
                      </div>
                    </div>
                  </div>
                  {mockData.map((row, idx) => (
                    <div key={idx} className="bg-white relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                          {row.showEye && (
                            <svg className="overflow-clip relative shrink-0 size-[16px]" fill="none" viewBox="0 0 12.1317 9.05467">
                              <path d="M12.0354 4.21533C11.6214 3.51133 9.38606 0 6.04406 0C2.70939 0 0.502061 3.50467 0.0940605 4.20667C-0.0452728 4.44467 -0.0286062 4.74467 0.13606 4.97067L1.21273 6.428C2.26273 7.62667 3.95606 9.05467 6.06206 9.05467C9.32006 9.05467 11.6034 5.62133 12.0274 4.932C12.1641 4.71067 12.1661 4.43533 12.0354 4.21533ZM6.06273 8.05467C4.33139 8.05467 2.87873 6.812 1.99139 5.80133L1.06073 4.53867C1.60339 3.65933 3.45873 0.999333 6.04406 0.999333C8.65139 0.999333 10.5354 3.69133 11.0781 4.56333C10.5234 5.41667 8.60406 8.05467 6.06273 8.05467ZM8.08339 4.52733C8.08339 5.632 7.18806 6.52733 6.08339 6.52733C4.97873 6.52733 4.08339 5.632 4.08339 4.52733C4.08339 3.42267 4.97873 2.52733 6.08339 2.52733C7.18806 2.52733 8.08339 3.42267 8.08339 4.52733Z" fill="#141414" />
                            </svg>
                          )}
                          <p className="flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">{row.employeeId}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Name Column: w-[143px] */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[143px]">
                  <div aria-hidden="true" className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none" />
                  <div className="bg-[#f5f7fa] relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
                        <p className="flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">{t.name}</p>
                      </div>
                    </div>
                  </div>
                  {mockData.map((row, idx) => (
                    <div key={idx} className="bg-white relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                          <p className="flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">{row.name}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Email Column: w-[217px] */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[217px]">
                  <div aria-hidden="true" className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none" />
                  <div className="bg-[#f5f7fa] relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
                        <p className="flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">{t.email}</p>
                      </div>
                    </div>
                  </div>
                  {mockData.map((row, idx) => (
                    <div key={idx} className="bg-white relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                          <p className="flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">{row.email}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Column: w-[378px] */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[378px]">
                  <div aria-hidden="true" className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none" />
                  <div className="bg-[#f5f7fa] relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
                        <p className="flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">{t.action}</p>
                      </div>
                    </div>
                  </div>
                  {mockData.map((row, idx) => (
                    <div key={idx} className="bg-white relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                          <p className="flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#141414] text-[14px] text-ellipsis whitespace-nowrap">{row.action}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Status Column: flex-[1_0_0] */}
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
                  <div aria-hidden="true" className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none" />
                  <div className="bg-[#f5f7fa] relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
                        <p className="flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">{t.status}</p>
                      </div>
                    </div>
                  </div>
                  {mockData.map((row, idx) => {
                    const sc = statusConfig[row.statusKey];
                    return (
                      <div key={idx} className="bg-white relative shrink-0 w-full">
                        <div aria-hidden="true" className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[12px] relative size-full">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                              <svg className="relative shrink-0 size-[6px]" fill="none" viewBox="0 0 6 6">
                                <circle cx="3" cy="3" r="3" fill={sc.color} />
                              </svg>
                              <p className="font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] whitespace-nowrap" style={{ color: sc.color }}>{sc.label}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Arrow Column: w-[48px] */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[48px]">
                  <div className="bg-[#f5f7fa] relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
                        <p className="flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] h-[22px] leading-[22px] min-w-px not-italic overflow-hidden relative text-[#8f9195] text-[14px] text-ellipsis whitespace-nowrap">​</p>
                      </div>
                    </div>
                  </div>
                  {mockData.map((_, idx) => (
                    <div key={idx} className="bg-white relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex items-center justify-center px-[16px] py-[7px] relative size-full">
                          <div className="overflow-clip relative rounded-[128px] shrink-0 size-[32px]">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[16px] top-1/2">
                              <div className="absolute flex inset-[19.27%_33.98%_18.23%_31.25%] items-center justify-center" style={{ containerType: "size" }}>
                                <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                                  <div className="relative size-full">
                                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.56346 10">
                                      <path clipRule="evenodd" d={svgPaths.p2f116d80} fill="var(--fill-0, #8F9195)" fillRule="evenodd" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>

        {/* Pagination */}
        <div className="bg-white relative shrink-0 w-full h-[64px]">
          <div className="-translate-y-1/2 absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] left-[24px] not-italic text-[#676a72] text-[14px] top-1/2 whitespace-nowrap">
            <p className="leading-[22px]">{t.totalItemsPrefix} {totalItems} {t.totalItemsSuffix}</p>
          </div>
          <div className="-translate-y-1/2 absolute content-stretch flex items-center gap-[8px] right-[24px] top-1/2">
            {/* Prev */}
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              className="overflow-clip relative rounded-[4px] shrink-0 size-[32px] flex items-center justify-center border border-[#dfe1e8] bg-white cursor-pointer hover:bg-[#f5f7fa] transition-colors"
            >
              <svg className="size-[10px]" fill="none" viewBox="0 0 5.56346 10">
                <path clipRule="evenodd" d={svgPaths.p2f116d80} fill="#141414" fillRule="evenodd" />
              </svg>
            </button>
            {/* Pages */}
            {getPaginationPages().map((page, idx) =>
              page === '...' ? (
                <div key={`ellipsis-${idx}`} className="overflow-clip relative rounded-[4px] shrink-0 size-[32px] flex items-center justify-center">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2">
                    <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 12 2">
                      <circle cx="1" cy="1" r="1" fill="#141414" />
                      <circle cx="6" cy="1" r="1" fill="#141414" />
                      <circle cx="11" cy="1" r="1" fill="#141414" />
                    </svg>
                  </div>
                </div>
              ) : (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page as number)}
                  className={`overflow-clip relative rounded-[4px] shrink-0 size-[32px] flex items-center justify-center font-['PingFang_SC:Regular',sans-serif] text-[14px] cursor-pointer transition-colors ${
                    currentPage === page
                      ? 'bg-[#1450f5] text-white'
                      : 'bg-white text-[#141414] hover:bg-[#f5f7fa]'
                  }`}
                >
                  {currentPage !== page && (
                    <div aria-hidden="true" className="absolute border border-[#c8cad0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  )}
                  <p className="leading-[22px]">{page}</p>
                </button>
              )
            )}
            {/* Next */}
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              className="overflow-clip relative rounded-[4px] shrink-0 size-[32px] flex items-center justify-center border border-[#dfe1e8] bg-white cursor-pointer hover:bg-[#f5f7fa] transition-colors"
            >
              <div className="absolute flex inset-[22.12%_31.75%_22.13%_34.63%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.56346 10">
                    <path clipRule="evenodd" d={svgPaths.p2f116d80} fill="#141414" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function StatisticsContentScrollable({ t, language }: { t: typeof translations.en; language: 'en' | 'cn' }) {
  const [selectedMetric, setSelectedMetric] = useState<'total' | 'up' | 'down'>('total');
  const [activeFilter, setActiveFilter] = useState<'60min' | '24h' | '30d' | '90d'>('30d');
  const [floorVisibility, setFloorVisibility] = useState({ up: true, down: true, total: true });
  const isChinese = language === 'cn';
  const titleClass = "font-['PingFang_SC:Medium',sans-serif] text-[14px] font-medium leading-[22px] text-[#141414]";
  const overview = [
    ['593,583', isChinese ? '次' : 'runs', isChinese ? '运行总次数' : 'Total runs', '#1450f5'],
    ['6.2', isChinese ? '小时/天' : 'hours/day', isChinese ? '平均运行时长' : 'Average runtime', '#1450f5'],
    ['28,593', isChinese ? '千米' : 'km', isChinese ? '运行总距离' : 'Total distance', '#1450f5'],
    ['10:00 ~ 11:00', '', isChinese ? '运行高峰时段' : 'Peak operating period', '#1450f5'],
    ['5F', '', isChinese ? '访问最多的楼层' : 'Most visited floor', '#1450f5'],
    ['384,482', isChinese ? '次' : 'events', isChinese ? '故障发生总次数' : 'Total faults', '#f51414'],
    ['35', isChinese ? '次' : 'events', isChinese ? '挡门故障次数' : 'Door obstruction count', '#f51414'],
    ['5', isChinese ? '分钟' : 'min', isChinese ? '最长挡门时长' : 'Longest obstruction', '#f51414'],
    ['4', isChinese ? '分钟' : 'min', isChinese ? '平均挡门时长' : 'Average obstruction', '#f51414'],
    ['3F', '', isChinese ? '挡门最多楼层' : 'Most obstruction floor', '#f51414'],
  ] as const;
  const trend = [84, 66, 86, 52, 65, 88, 77, 68, 84, 63, 87, 74, 59, 81, 66, 89, 61, 78, 72, 69, 83, 75, 82, 73, 91, 87, 76, 53, 86, 63];
  const analysis = [235, 205, 218, 260, 355, 380, 240, 265, 295, 340, 430, 352, 385, 330, 270, 295, 355, 310, 420, 365, 405, 390, 420, 460, 385, 430, 520, 540, 510, 430];
  const lineValues = selectedMetric === 'total'
    ? analysis
    : analysis.map((value, index) => selectedMetric === 'up' ? Math.round(value * (0.48 + (index % 3) * 0.02)) : Math.round(value * (0.52 - (index % 3) * 0.02)));
  const floors = ['12F', '11F', '10F', '9F', '8F', '7F', '6F', '5F', '4F', '3F', '2F', '1F'].map((floor, index) => ({
    floor,
    up: [72, 54, 62, 84, 55, 142, 50, 74, 42, 142, 48, 305][index],
    down: [305, 235, 52, 62, 52, 55, 175, 235, 36, 64, 52, 0][index],
    total: [178, 350, 285, 125, 165, 315, 200, 345, 120, 200, 200, 200][index],
  }));
  const metricLabel = selectedMetric === 'total' ? (isChinese ? '总运行次数' : 'Total run count') : selectedMetric === 'up' ? (isChinese ? '上行次数' : 'Up count') : (isChinese ? '下行次数' : 'Down count');
  const dateLabels = Array.from({ length: 30 }, (_, index) => `3.${index + 1}`);
  const lineX = (index: number) => 54 + index * (634 / 29);
  const lineY = (value: number) => 198 - value * 0.27;
  const linePoints = lineValues.map((value, index) => `${lineX(index)},${lineY(value)}`).join(' ');
  const trendX = (index: number) => 48 + index * (646 / 29);
  const chartHeader = (title: string, trailing?: React.ReactNode) => (
    <header className="flex h-[39px] items-center justify-between border-b border-[#dfe1e8] bg-[#fafbfc] px-3">
      <div className="flex items-center gap-2">
        <span className="h-[14px] w-1 shrink-0 rounded-[1px] bg-[#4373f7]" aria-hidden="true" />
        <h2 className={titleClass}>{title}</h2>
      </div>
      {trailing}
    </header>
  );

  return (
    <div className="flex flex-col gap-3 pb-5" data-name="统计数据">
      <section className="overflow-hidden rounded-[8px] border border-[#dfe1e8] bg-white">
        {chartHeader(isChinese ? '统计总览' : 'Statistics overview')}
        <div className="grid grid-cols-1 gap-2 p-3 sm:grid-cols-2 xl:grid-cols-5">
          {overview.map(([value, unit, label, color]) => (
            <div key={label} className="min-w-0 rounded-[6px] bg-[#f5f7fa] px-4 py-2.5">
              <div className="flex h-[22px] items-center gap-2">
                <span className="size-1.5 shrink-0 rounded-full" style={{ backgroundColor: color }} />
                <span className="truncate text-[16px] font-medium leading-[22px] text-[#141414]">{value}</span>
                {unit && <span className="shrink-0 pt-0.5 text-[12px] leading-5 text-[#141414]">{unit}</span>}
              </div>
              <p className="mt-0.5 truncate text-[12px] leading-5 text-[#676a72]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-[8px] border border-[#dfe1e8] bg-white">
        {chartHeader(isChinese ? '日在线率趋势' : 'Daily online rate trend')}
        <div className="h-[244px] px-3 pb-3 pt-4">
          <svg className="size-full" viewBox="0 0 720 214" preserveAspectRatio="none" role="img" aria-label={isChinese ? '日在线率趋势图' : 'Daily online rate trend chart'}>
            {[100, 80, 60, 40, 20].map((tick) => {
              const y = 14 + (100 - tick) * 1.68;
              return <g key={`online-grid-${tick}`}><line x1="36" x2="710" y1={y} y2={y} stroke="#dddddd" strokeDasharray="2 2" /><text x="29" y={y + 4} textAnchor="end" fill="#727272" fontSize="12">{tick}%</text></g>;
            })}
            {trend.map((value, index) => {
              const x = trendX(index);
              const y = 14 + (100 - value) * 1.68;
              return <g key={`online-bar-${index}`}><rect x={x - 4} y="14" width="8" height="168" fill="rgba(114,114,114,0.2)" /><rect x={x - 4} y={y} width="8" height={182 - y} fill="#4373f7" /><text x={x} y="205" textAnchor="middle" fill="#727272" fontSize="10">{dateLabels[index]}</text></g>;
            })}
          </svg>
        </div>
      </section>

      <section className="overflow-hidden rounded-[8px] border border-[#dfe1e8] bg-white">
        {chartHeader(
          isChinese ? '数据分析' : 'Data analysis',
          <div className="flex items-center gap-[7px]">{([{ key: '90d', label: '90天' }, { key: '30d', label: '30天' }, { key: '24h', label: '24小时' }, { key: '60min', label: '60分钟' }] as const).map((filter) => (
            <button key={filter.key} type="button" onClick={() => setActiveFilter(filter.key)} className={`h-6 rounded-[3px] border px-2 text-[12px] leading-5 transition-colors ${activeFilter === filter.key ? 'border-[#1450f5] bg-white text-[#1450f5]' : 'border-[#c8cad0] bg-white text-[#141414] hover:border-[#8ba8fb]'}`}>{isChinese ? filter.label : filter.key.toUpperCase()}</button>
          ))}</div>,
        )}
        <div className="p-4">
          <div className="mb-3 flex items-center justify-between">
            <h3 className={titleClass}>{isChinese ? '分时段统计' : 'Time segment statistics'}</h3>
            <select value={selectedMetric} onChange={(event) => setSelectedMetric(event.target.value as 'total' | 'up' | 'down')} className="h-7 w-[140px] rounded-[4px] border border-[#c8cad0] bg-white px-2 text-[12px] text-[#141414]">
              <option value="total">{isChinese ? '总运行次数' : 'Total run count'}</option><option value="up">{isChinese ? '上行次数' : 'Up count'}</option><option value="down">{isChinese ? '下行次数' : 'Down count'}</option>
            </select>
          </div>
          <div className="h-[250px]">
            <svg className="size-full" viewBox="0 0 720 232" preserveAspectRatio="none" role="img" aria-label={metricLabel}>
              {[0, 100, 200, 300, 400, 500, 600].map((tick) => {
                const y = 198 - tick * 0.27;
                return <g key={`analysis-grid-${tick}`}><line x1="40" x2="710" y1={y} y2={y} stroke="#dddddd" /><text x="31" y={y + 4} textAnchor="end" fill="#727272" fontSize="12">{tick}</text></g>;
              })}
              <line x1={lineX(7)} x2={lineX(7)} y1="36" y2="198" stroke="#d9e3ff" strokeDasharray="2 2" />
              <polyline points={linePoints} fill="none" stroke="#90afff" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
              {lineValues.map((value, index) => <g key={`analysis-point-${index}`}><circle cx={lineX(index)} cy={lineY(value)} r="2.5" fill="#fff" stroke="#90afff" strokeWidth="1.5" /><text x={lineX(index)} y="219" textAnchor="middle" fill="#727272" fontSize="10">{dateLabels[index]}</text></g>)}
            </svg>
          </div>

          <div className="mt-6">
            <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
              <div><h3 className={titleClass}>{isChinese ? '楼层统计' : 'Floor statistics'}</h3><p className="mt-1 text-[12px] leading-5 text-[#727272]">{isChinese ? '单位（次）' : 'Unit (runs)'}</p></div>
              <div className="flex gap-4 pt-1 text-[12px]">{([{ key: 'up', label: isChinese ? '上行次数' : 'Up count', color: '#4373f7' }, { key: 'down', label: isChinese ? '下行次数' : 'Down count', color: '#0dd2e1' }, { key: 'total', label: isChinese ? '总运行次数' : 'Total run count', color: '#ffcb49' }] as const).map((item) => (
                <button key={item.key} type="button" onClick={() => setFloorVisibility((current) => ({ ...current, [item.key]: !current[item.key] }))} className={`flex items-center gap-1 ${floorVisibility[item.key] ? 'text-[#676a72]' : 'text-[#c8cad0]'}`}><span className="size-[6px] rounded-[1px]" style={{ backgroundColor: item.color }} />{item.label}</button>
              ))}</div>
            </div>
            <div className="h-[315px]">
              <svg className="size-full" viewBox="0 0 720 310" preserveAspectRatio="none" role="img" aria-label={isChinese ? '楼层统计图' : 'Floor statistics chart'}>
                {[0, 50, 100, 150, 200, 250, 300, 350, 400].map((tick) => {
                  const x = 48 + tick * 1.65;
                  return <g key={`floor-grid-${tick}`}><line x1={x} x2={x} y1="8" y2="286" stroke="#eeeeee" /><text x={x} y="302" textAnchor="middle" fill="#727272" fontSize="11">{tick}</text></g>;
                })}
                {floors.map((row, index) => {
                  const y = 15 + index * 22.5;
                  return <g key={`floor-row-${row.floor}`}><text x="40" y={y + 9} textAnchor="end" fill="#727272" fontSize="12">{row.floor}</text>{floorVisibility.up && <rect x="48" y={y} width={row.up * 1.65} height="4" rx="1" fill="#4373f7" />}{floorVisibility.down && <rect x="48" y={y + 6} width={row.down * 1.65} height="4" rx="1" fill="#0dd2e1" />}{floorVisibility.total && <rect x="48" y={y + 12} width={row.total * 1.65} height="4" rx="1" fill="#ffcb49" />}</g>;
                })}
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

type CoreTab = 'liveData' | 'masterData' | 'events';
const CORE_TAB_MAP: Record<string, CoreTab> = {
  liveData: 'liveData',
  masterData: 'masterData',
  events: 'events',
};

export default function Events({
  activeTabOverride,
  onCoreTabChange,
  languageOverride,
  onLanguageChange,
  currentUser,
  onLogout,
  onSwitchAccount,
  approvals,
  taskBadgeCount,
  notifications,
  onSubmitUpgradeApproval,
  onReviewUpgradeApproval,
  onReapplyUpgradeApproval,
  onMarkNotificationsRead,
}: {
  activeTabOverride?: CoreTab;
  onCoreTabChange?: (tab: CoreTab) => void;
  languageOverride?: 'en' | 'cn';
  onLanguageChange?: (lang: 'en' | 'cn') => void;
  currentUser?: AppAccount;
  onLogout?: () => void;
  onSwitchAccount?: (account: AppAccount) => void;
  approvals?: UpgradeApproval[];
  taskBadgeCount?: number;
  notifications?: AppNotification[];
  onSubmitUpgradeApproval?: (data: { initiator: AppAccount; scheduledAt: string; packages: Record<string, string> }) => void;
  onReviewUpgradeApproval?: (id: string, result: "approved" | "rejected", reviewRemark?: string) => void;
  onReapplyUpgradeApproval?: (id: string, submissionRemark?: string) => void;
  onMarkNotificationsRead?: () => void;
} = {}) {
  const [language, setLanguage] = useState<'en' | 'cn'>(languageOverride ?? 'en');
  const [activeTab, setActiveTab] = useState<'liveData' | 'masterData' | 'statistics' | 'events' | 'operationRecords'>(
    activeTabOverride ?? 'liveData'
  );
  const [isTabSticky, setIsTabSticky] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeSidebarItem, setActiveSidebarItem] = useState<string | null>(null);
  const [isTaskProgressPage, setIsTaskProgressPage] = useState(false);
  const [progressRefreshKey, setProgressRefreshKey] = useState(0);
  const [approvalTab, setApprovalTab] = useState<"initiated" | "pending">("initiated");
  const tabRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const t = translations[language];
  const displayUser: AppAccount = currentUser ?? { email: "", password: "", name: "访客", nameEn: "Guest", role: "", roleEn: "", avatar: "", sidebarPermissions: [] };

  const sidebarWidth = isCollapsed ? 64 : 232;

  const handleTabChange = (tab: 'liveData' | 'masterData' | 'statistics' | 'events' | 'operationRecords') => {
    setActiveTab(tab);
    const coreTab = CORE_TAB_MAP[tab];
    if (coreTab) onCoreTabChange?.(coreTab);
  };

  const handleSidebarItemChange = (item: string) => {
    setIsTaskProgressPage(false);
    setActiveSidebarItem(item);
    if (item === "operation-history") setActiveTab("operationRecords");
  };

  const isBatchOperationsPage = activeSidebarItem === 'batch-operations';
  const isApprovalCenterPage = activeSidebarItem === 'approval-center';
  const isTaskListPage = activeSidebarItem === 'task-list';
  const isRuleConfigurationPage = activeSidebarItem === 'rule-configuration';
  const isDeviceQueryPage = activeSidebarItem === null || activeSidebarItem === 'search';
  const isDevelopmentPage = !isTaskProgressPage && !isDeviceQueryPage && activeSidebarItem !== 'batch-operations' && activeSidebarItem !== 'approval-center' && activeSidebarItem !== 'task-list' && activeSidebarItem !== 'rule-configuration';

  // Sync when parent changes the active tab
  useEffect(() => {
    if (activeTabOverride) setActiveTab(activeTabOverride);
  }, [activeTabOverride]);

  // Sync when parent changes language
  useEffect(() => {
    if (languageOverride) setLanguage(languageOverride);
  }, [languageOverride]);

  const toggleLanguage = () => {
    const next = language === 'en' ? 'cn' : 'en';
    setLanguage(next);
    onLanguageChange?.(next);
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      // Tab becomes sticky when scroll position is greater than the initial tab offset
      // The tab initially appears at mt-[20px] after device card, so it becomes sticky when scrolled past that point
      setIsTabSticky(scrollContainer.scrollTop > 168); // 20px (device card margin) + 148px (device card height approx)

      // Show scrollbar while scrolling
      scrollContainer.classList.add('scrolling');

      // Hide scrollbar after scrolling stops
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        scrollContainer.classList.remove('scrolling');
      }, 1000);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="bg-[#f5f7fa] relative size-full flex" data-name="Events">
      {/* Top Navigation - Fixed */}
      <div className="fixed bg-white flex h-[56px] items-center justify-between left-0 right-0 px-[24px] py-[12px] top-0 z-30" data-name="headerMenu 顶部菜单导航">
        <div aria-hidden="true" className="absolute border-[#e7e7e7] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex min-w-0 items-center">
          <Frame />
          {isTaskProgressPage && <PageNavigationControls onBack={() => setIsTaskProgressPage(false)} onForward={() => setIsTaskProgressPage(true)} onRefresh={() => setProgressRefreshKey((current) => current + 1)} />}
          <p className="ml-[28px] rounded-[4px] border border-[#e7e7e7] bg-[#f7f7f7] px-2 py-1 whitespace-nowrap text-[12px] leading-5 text-[#a1a4aa]">本 Demo 仅演示交互与内容，开发样式请以 Figma 设计交付为准，勿直接基于 Demo 开发。</p>
        </div>
        <Frame3 language={language} onLanguageChange={toggleLanguage} user={displayUser} onLogout={onLogout} onSwitchAccount={onSwitchAccount} taskBadgeCount={taskBadgeCount ?? 2} notifications={notifications ?? []} onMarkNotificationsRead={() => onMarkNotificationsRead?.()} onOpenApprovalCenter={() => { setIsTaskProgressPage(false); setActiveSidebarItem("approval-center"); setApprovalTab("pending"); }} onOpenTaskList={() => { setIsTaskProgressPage(false); setActiveSidebarItem("task-list"); }} onOpenMessageCenter={() => { setIsTaskProgressPage(false); setActiveSidebarItem("message-center"); }} />
      </div>

      {/* Left Sidebar - Fixed, collapsible */}
      <div
        className="fixed bg-white flex flex-col items-start left-0 overflow-hidden pt-[8px] top-[56px] bottom-0 z-20 transition-[width] duration-300 ease-in-out"
        style={{ width: sidebarWidth }}
        data-name="Menu 侧边菜单导航"
      >
        <Content1 t={t} isCollapsed={isCollapsed} activeItem={activeSidebarItem} onItemChange={handleSidebarItemChange} visibleItems={displayUser.sidebarPermissions} />
        <div className="bg-white h-[56px] relative shrink-0 w-full" data-name=".master/item normalMenu/menuOperations">
          <div aria-hidden="true" className="absolute border-[#dfe1e8] border-solid border-t inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <button
              onClick={() => setIsCollapsed(prev => !prev)}
              className={`content-stretch flex gap-[8px] items-center ${isCollapsed ? 'justify-center px-[8px]' : 'px-[16px]'} py-[14px] relative size-full bg-transparent border-0 cursor-pointer group`}
              title={isCollapsed ? (language === 'en' ? 'Expand sidebar' : '展开侧边栏') : (language === 'en' ? 'Collapse sidebar' : '收起侧边栏')}
            >
              <div className="overflow-clip relative rounded-[4px] shrink-0 size-[32px] group-hover:bg-[#f0f0f0] transition-colors" data-name="Button 按钮">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="view-list">
                  <div className="absolute inset-[21.88%_12.5%]" data-name="Union">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9">
                      <g id="Union">
                        <path d="M12 1H0V0H12V1Z" fill="var(--fill-0, #141414)" />
                        <path d="M12 5H0V4H12V5Z" fill="var(--fill-0, #141414)" />
                        <path d="M0 9H12V8H0V9Z" fill="var(--fill-0, #141414)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area - Scrollable, margin matches sidebar width */}
      <div
        ref={scrollContainerRef}
        className="mt-[56px] flex-1 overflow-y-auto bg-[#f5f7fa] custom-scrollbar transition-[margin-left] duration-300 ease-in-out"
        style={{ marginLeft: sidebarWidth }}
      >
        <div className="flex min-h-[calc(100vh-56px)] flex-col bg-[#f5f7fa]">
          {isTaskProgressPage ? (
            <TaskProgressContent key={progressRefreshKey} language={language} />
          ) : isBatchOperationsPage ? (
            <div className="mx-[16px] mt-[20px] md:mx-[24px]">
              <BatchOperationsContent language={language} onSubmitForApproval={(submission) => onSubmitUpgradeApproval?.({ initiator: displayUser, ...submission })} />
            </div>
          ) : isApprovalCenterPage ? (
            <div className="mx-[16px] mt-[20px] md:mx-[24px]">
              <ApprovalCenterContent language={language} currentUser={displayUser} approvals={approvals ?? []} defaultTab={approvalTab} onReview={(id, result, reviewRemark) => onReviewUpgradeApproval?.(id, result, reviewRemark)} onReapply={(id, submissionRemark) => onReapplyUpgradeApproval?.(id, submissionRemark)} />
            </div>
          ) : isTaskListPage ? (
            <div className="mx-[16px] mt-[20px] md:mx-[24px]">
              <TaskListContent language={language} approvals={approvals ?? []} onOpenTaskProgress={() => { setIsTaskProgressPage(true); scrollContainerRef.current?.scrollTo({ top: 0 }); }} />
            </div>
          ) : isRuleConfigurationPage ? (
            <div className="mx-[16px] mt-[20px] md:mx-[24px]">
              <RuleConfigurationContent language={language} />
            </div>
          ) : isDevelopmentPage ? (
            <div className="mx-[16px] mt-[20px] md:mx-[24px]">
              <ModuleUnderDevelopment language={language} />
            </div>
          ) : (
            <>
          {/* Device Info Card */}
          <div className="bg-white flex flex-col gap-[24px] items-start mx-[24px] mt-[20px] px-[29px] py-[17px] rounded-[8px] relative" data-name="Container">
            <div aria-hidden="true" className="absolute border border-[#dfe1e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <Frame8 t={t} />
            <Frame9 t={t} />
          </div>

          {/* Sticky Tabs */}
          <div
            ref={tabRef}
            className={`sticky top-0 z-10 ${
              isTabSticky
                ? 'bg-white'
                : 'bg-[#f5f7fa] mx-[24px] mt-[20px]'
            }`}
          >
            <div className={`bg-white ${isTabSticky ? '' : 'rounded-tl-[8px] rounded-tr-[8px]'}`} data-name="normalTabs 选项卡-默认主题">
              <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
                <div className="bg-white content-stretch flex items-start p-[8px] relative shrink-0" data-name="item/normalTabs/top/m">
                  {activeTab === 'liveData' && <div aria-hidden="true" className="absolute border-[#1450f5] border-b-3 border-solid inset-0 pointer-events-none" />}
                  <Content2 t={t} isActive={activeTab === 'liveData'} onClick={() => handleTabChange('liveData')} />
                </div>
                <div className="bg-white content-stretch flex items-start p-[8px] relative shrink-0" data-name="item/normalTabs/top/m">
                  {activeTab === 'masterData' && <div aria-hidden="true" className="absolute border-[#1450f5] border-b-3 border-solid inset-0 pointer-events-none" />}
                  <Content3 t={t} isActive={activeTab === 'masterData'} onClick={() => handleTabChange('masterData')} />
                </div>
                <div className="bg-white content-stretch flex items-start p-[8px] relative shrink-0" data-name="item/normalTabs/top/m">
                  {activeTab === 'statistics' && <div aria-hidden="true" className="absolute border-[#1450f5] border-b-3 border-solid inset-0 pointer-events-none" />}
                  <Content4 t={t} isActive={activeTab === 'statistics'} onClick={() => handleTabChange('statistics')} />
                </div>
                <div className="bg-white content-stretch flex items-start p-[8px] relative shrink-0" data-name="item/normalTabs/top/m">
                  {activeTab === 'events' && <div aria-hidden="true" className="absolute border-[#1450f5] border-b-3 border-solid inset-0 pointer-events-none" />}
                  <Content5 t={t} isActive={activeTab === 'events'} onClick={() => handleTabChange('events')} />
                </div>
                <div className="bg-white content-stretch flex items-start p-[8px] relative shrink-0" data-name="item/normalTabs/top/m">
                  {activeTab === 'operationRecords' && <div aria-hidden="true" className="absolute border-[#1450f5] border-b-3 border-solid inset-0 pointer-events-none" />}
                  <Content6 t={t} isActive={activeTab === 'operationRecords'} onClick={() => handleTabChange('operationRecords')} />
                </div>
              </div>
              <div aria-hidden="true" className={`absolute border-[#dfe1e8] border-b border-solid inset-0 pointer-events-none ${isTabSticky ? '' : 'rounded-tl-[8px] rounded-tr-[8px]'}`} />
            </div>
          </div>

          {/* Tab Content */}
          <div className="flex-1 mx-[24px] mt-[16px]">
            {activeTab === 'liveData' && <LiveDataContent language={language} />}
            {activeTab === 'masterData' && <DeviceArchiveContent language={language} />}
            {activeTab === 'events' && (
              <EventsTabContent t={t} language={language} />
            )}
            {activeTab === 'statistics' && <StatisticsContentScrollable t={t} language={language} />}
            {activeTab === 'operationRecords' && <OperationRecordsContent t={t} />}
          </div>

            </>
          )}

          {/* Footer */}
          <div className="flex items-center justify-center p-[16px]" data-name="footer">
            <p className="font-['PingFang_SC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#959595] text-[12px] text-center whitespace-nowrap">Copyright @ 2019-2022 KONE. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}