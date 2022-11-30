declare class AgentDesktopPlugin {
    name: any;
    config: any;
    agentDesktopInfo: any;
    typingCount: number;
    doneTypingInterval: number;
    constructor(config?: any);
    onHostCreate(): void;
    onInit(): void;
    appendVideoAudioElemnts(): void;
    extend(target: any, source: any): any;
}
export default AgentDesktopPlugin;
