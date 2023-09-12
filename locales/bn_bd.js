
/**
 * language: bengali
 */
const lang = {

  // app desc
  app: {
    desc: 'টার্মিনাল/ssh/sftp/telnet/serialport সাপোর্টিং মাধ্যম(linux, mac, win)',
    isRunning: 'চলছে',
    press: 'ছাপা',
    toShow: 'দেখাতে',
    changeLog: 'পরিবর্তিত লগ',
    knownIssues: 'পরিচিত ইস্যু সমূহ',
    sponsorElecterm: 'স্পন্সর electerm',
    privacyNotice: 'প্রাইভেসি নোটিশ'
  },

  // app menu
  menu: {
    // mac app
    hide: 'গোপন করা',
    hideothers: 'বাকি গুলো গোপন কর',
    unhide: 'প্রকাশ করা',
    quit: 'ত্যাগ করা,

    // edit
    edit: 'সংশোধন',
    undo: 'পূর্বাবস্থায় ফেরা,
    redo: 'পরবর্তী অবস্থায় আসা',
    cut: 'কাটা',
    copy: 'কপি',
    paste: 'পেস্ট',
    pasteandmatchstyle: 'পেস্ট এবং স্টাইলের মিল',
    del: 'মুছে ফেলা',
    selectall: 'সব সিলেক্ট',
    startspeaking: 'কথা শুরু করা',
    stopspeaking: 'কথা শেষ করা',

    // view
    view: 'দেখা',
    reload: 'রিলোড',
    forcereload: 'ফোর্স রিলোড',
    toggledevtools: 'টগল ডেভ টুলস',
    toggleControl: 'টগল কন্ট্রোল বাটন',
    resetzoom: 'রিসেট জুম',
    zoomin: 'জুম ইন',
    zoomout: 'জুম আউট',
    togglefullscreen: 'টগল ফুলস্ক্রিন',

    // window
    window: 'উইন্ডোজ',
    minimize: 'মিনিমাইজ',
    maximize: 'ম্যাক্সিমাইজ',
    unmaximize: 'আনম্যাক্সিমাইজ',
    close: 'বন্ধ',
    restart: 'রিস্টার্ট',
    front: 'সামনে',

    // help
    help: 'সাহায্য',
    about: 'সম্পর্কে',
    checkUpdate: 'চেক আপডেট',
    reportIssue: 'রিপোর্ট ইস্যু',
    homepage: 'হোম পেইজ',
    sencondInstanceTip: 'শুধু মাত্র প্রধান উইন্ডোতে করা যাবে',
    copyFilePath: 'ফাইলের অবস্থান কপি করা'
  },

  // common
  common: {
    history: 'ইতিহাস',
    bookmarks: 'বুকমার্কস',
    bookmarkCategory: 'ক্যাটেগরি',
    setting: 'সেটিং',
    about: 'সম্পর্কে',
    ok: 'ওকে',
    cancel: 'বাতিল',
    expandAll: 'সব গুলো প্রসারিত করা',
    collapseAll: 'সব গুলো সংকোচন করা',
    restoreSessions: 'রিস্টোর সেশন',
    ignore: 'উপেক্ষা করা',
    pin: 'পেনেল খোলা রাখ',
    keyboardShortcuts: 'কিবোর্ড শর্টকাট',
    delSelected: 'সিলেক্টেডটি মুছে ফেল',
    turnOff: 'বন্ধ কর',
    tasks: 'কাজ সমূহ',
    batchOperation: 'ব্যাচ অপারেশন',
    examples: 'উদাহরণ',
    importFromCSV: 'CSV ফাইল থেকে প্রবেশ,
    addToQueue: 'কিউতে যুক্ত কর',
    execute: 'চালাও',
    finished: 'শেষ'
  },

  // control buttons
  control: {
    author: 'author',
    download: 'download',
    bugReport: 'bug report',
    checkForUpdate: 'check for update',
    homepage: 'homepage',
    notFoundContent: 'no item',
    newSsh: 'new ssh',
    newTerminal: 'new terminal',
    dependencies: 'dependencies',
    env: 'env',
    os: 'os',
    userTips: 'user tips',
    commandLineUsage: 'command line usage',
    newBookmark: 'new bookmark',
    newWindow: 'new window'
  },

  // transferHistory
  transferHistory: {
    transferHistory: 'transfer history',
    localPath: 'local path',
    remotePath: 'remote path',
    type: 'type',
    startTime: 'start time',
    finishTime: 'finish time',
    speed: 'speed',
    clear: 'clear',
    fromPath: 'source path',
    toPath: 'target path'
  },

  // ssh tabs
  tabs: {
    titleEmptyWarn: 'title can not be empty',
    close: 'close',
    closeOtherTabs: 'close other tabs',
    closeTabRight: 'close tabs on the right',
    newTab: 'new tab',
    duplicate: 'duplicate',
    rename: 'rename',
    openNewTerm: 'open new terminal',
    sessions: 'sessions'
  },

  // main warpper
  main: {
    error: 'Something went wrong.'
  },

  // updater check
  updater: {
    noNeed: 'no need to update',
    noNeedDesc: 'you are using the latest release',
    fail: 'check update fails',
    newVersion: 'new version found',
    upgrade: 'upgrade',
    upgrading: 'upgrading',
    skipThisVersion: 'skip this version',
    moreChangeLog: 'more change log',
    manuallyDownloadFrom: 'manually download from'
  },

  // setting
  setting: {
    new: 'new',
    settings: 'settings',
    common: 'common',
    hotkeyNotOk: 'hotkey can not be registe, please use another one',
    saved: 'saved',
    saveLang: 'saved, restart to take effect',
    restartNow: 'restart now',
    hotkeyDesc: 'system hotkey(bring window back to front)',
    timeoutDesc: 'ssh/sftp timeout(in millisecond)',
    scrollBackDesc: 'scrollback lines',
    language: 'language',
    copyWhenSelect: 'copy selected text when select',
    rightClickSelectsWord: 'right click auto select word',
    pasteWhenContextMenu: 'paste when right click',
    fontSize: 'font size',
    fontFamily: 'font family',
    opacity: 'opacity',
    global: 'global',
    disableSshHistory: 'disable ssh history',
    disableTransferHistory: 'disable sftp transfer history',
    resetAllToDefault: 'restore settings to their original defaults',
    terminalBackgroundImage: 'terminal background image',
    chooseFile: 'choose file',
    rendererType: 'renderer type',
    defaultTerminalType: 'default terminal type',
    ctrlOrMetaOpenTerminalLink: 'must hold ctrl or meta (in mac) when click to open terminal link',
    noTerminalBg: 'no background image',
    saveTerminalLogToFile: 'save terminal log to file',
    checkUpdateOnStart: 'check update on app start',
    encrypt: 'encrypt',
    cursorBlink: 'cursor blink',
    openAll: 'open all bookmark in this category',
    useSystemTitleBar: 'use system title bar',
    useSystemTitleBarTip: 'Need restart app to take effect, when use system title bar, transparent do not work',
    onStartBookmarks: 'open bookmarks on startup',
    pleaseSelect: 'please select',
    keepaliveIntervalDesc: 'keepalive interval',
    editorTip: 'editor\'s command or path',
    cursorStyle: 'cursor style',
    confirmBeforeExit: 'confirm before exit',
    initDefaultTabOnStart: 'open default tab when app start',
    screenReaderMode: 'support screen reader in terminal',
    makeItPortable: 'make it portable',
    dataTransferedTo: 'data transfered to',
    autoRefreshWhenSwitchToSftp: 'auto refresh when switch to sftp'
  },

  // sftp
  sftp: {
    cancel: 'cancel',
    skip: 'skip',
    merge: 'merge',
    overwrite: 'overwrite',
    rename: 'rename',
    renameAll: 'rename all',
    mergeDesc: 'merge rest conflict folders',
    overwriteDesc: 'overwrite rest conflict files',
    mergeAll: 'merge all',
    overwriteAll: 'overwrite all',
    renameDesc: 'rename rest files/folders',
    folder: 'folder',
    file: 'file',
    fileConflict: 'file conflict',
    submit: 'submit',
    edit: 'edit',
    open: 'open',
    permission: 'permission',
    name: 'name',
    mode: 'mode',
    path: 'path',
    fullPath: 'full path',
    size: 'size',
    accessTime: 'access time',
    modifyTime: 'modify time',
    attributes: 'attributes',
    enter: 'enter',
    deleteAll: 'delete all',
    selected: 'selected',
    newFile: 'new file',
    newFolder: 'new folder',
    selectAll: 'select all',
    refresh: 'refresh',
    editPermission: 'edit permission',
    info: 'info',
    filesAndFolders: 'files/folders',
    files: 'files',
    delTip: 'are you sure? this will delete these',
    delTip1: 'and all the file/directory in them',
    goParent: 'goto parent folder',
    hide: 'hide',
    show: 'show',
    hfd: 'hidden files and directories',
    remote: 'remote',
    local: 'local',
    fileTransfers: 'file transfers',
    cancelAll: 'cancel all',
    upload: 'upload',
    download: 'download',
    resume: 'resume',
    pause: 'pause',
    reset: 'reset',
    showInDefaultFileMananger: 'show in file manager',
    compressAndDownload: 'compress and download',
    compressAndUpload: 'compress and upload',
    editWithSystemEditor: 'edit with system editor'
  },

  permission: {
    read: 'read',
    write: 'write',
    exec: 'exec',
    owner: 'owner',
    group: 'group',
    other: 'other'
  },

  // ssh form
  form: {
    password: 'password',
    privateKey: 'privateKey',
    privateKeyDesc: 'private key string',
    importFromFile: 'import from file',
    passphrase: 'passphrase',
    passphraseDesc: 'passphrase for privateKey',
    host: 'host',
    username: 'username',
    port: 'port',
    title: 'title',
    saveAndConnect: 'save and connect',
    saveAndCreateNew: 'save and create new',
    save: 'save',
    loginScript: 'run script',
    loginScriptDelay: 'run script delay',
    loginScriptTip: 'run script after logined',
    connect: 'connect',
    testConnection: 'test connection',
    required: 'required',
    proxyIp: 'proxy ip',
    proxyPort: 'proxy port',
    proxyType: 'proxy type',
    proxyIpPlaceholder: 'proxy ip address',
    selectProxy: 'select proxy',
    auth: 'auth',
    proxy: 'proxy',
    use: 'use',
    encode: 'encode',
    terminalType: 'terminal type',
    startDirectory: 'start directory',
    ignoreKeyboardInteractive: 'ignore keyboard interactive',
    description: 'description'
  },

  // ssh terminal
  ssh: {
    clear: 'clear',
    selectAll: 'select all',
    savePassword: 'save password',
    search: 'search',
    terminal: 'terminal',
    nextMatch: 'next match',
    prevMatch: 'prev match',
    split: 'split',
    fileManager: 'file manager',
    changeDirection: 'change direction',
    batchInput: 'batch input',
    runInAllTerminals: 'run in all terminals',
    matchCase: 'case sensitive',
    matchWholeWord: 'match whole word',
    useRegExp: 'use regular expression',
    socketCloseTip: 'terminal connection lost',
    sshTunnel: 'ssh tunnel',
    remotePort: 'remote port',
    localPort: 'local port',
    localToRemote: 'forward local connection to remote server',
    remoteToLocal: 'forward remote connection to local server'
  },

  // terminal themes
  terminalThemes: {
    terminalThemes: 'terminal themes',
    export: 'export',
    themeName: 'theme name',
    saveAndApply: 'save and apply',
    apply: 'apply',
    default: 'default',
    newTheme: 'new theme',
    themeConfig: 'theme config',
    updated: 'updated',
    uiThemes: 'UI Themes'
  },

  // quick commands
  quickCommands: {
    quickCommand: 'quick command',
    quickCommands: 'quick commands',
    quickCommandName: 'quick command name',
    addQuickCommands: 'add quick commands',
    newQuickCommand: 'new quick command',
    inputOnly: 'input only',
    labels: 'labels'
  },

  // setting sync
  settingSync: {
    settingSync: 'setting sync',
    sync: 'sync',
    syncing: 'syncing',
    syncSettings: 'sync settings',
    uploadSettings: 'upload settings',
    downloadSettings: 'download settings',
    synced: 'synced',
    syncDesc: 'sync bookmark / history / setting to github secret gist',
    autoSync: 'auto sync',
    lastSyncTime: 'last sync time',
    useExistingGistId: 'use existing'
  }
}

export default {
  lang,
  name: 'Bengali',
  match: 'bn',
  flag: '🇧🇩'
    }
