import * as process from 'process';
import MemoryUsage = NodeJS.MemoryUsage;
import CpuUsage = NodeJS.CpuUsage;

export async function getMetrics(): Promise<SimpleMetrics> {
    const cpuUsage: CpuUsage = process.cpuUsage();
    const memoryUsage: MemoryUsage = process.memoryUsage();
    return {
        pid: process.pid,
        ppid: process.ppid,
        uptime: process.uptime(),
        cpu: {
            user: cpuUsage.user,
            system: cpuUsage.system,
        },
        memory: {
            rss: memoryUsage.rss,
            heapTotal: memoryUsage.heapTotal,
            heapUsed: memoryUsage.heapUsed,
            external: memoryUsage.external,
        },
    };
}

export interface SimpleMetricsCpuUsage {
    user: number;
    system: number;
}

export interface SimpleMetricsMemoryUsage {
    rss: number;
    heapTotal: number;
    heapUsed: number;
    external: number;
}

export interface SimpleMetrics {
    pid: number;
    ppid: number;
    uptime: number;
    cpu: SimpleMetricsCpuUsage;
    memory: SimpleMetricsMemoryUsage;
}
