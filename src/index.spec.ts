import { getMetrics, SimpleMetrics } from './index';

describe('getMetrics', () => {
    it('should return a promise', () => {
        expect(getMetrics()).toBeInstanceOf(Promise);
    });

    it('should return process metrics', async () => {
        const metrics: SimpleMetrics = await getMetrics();
        expect(metrics).toEqual({
            pid: expect.any(Number),
            ppid: expect.any(Number),
            uptime: expect.any(Number),
            cpu: {
                user: expect.any(Number),
                system: expect.any(Number),
            },
            memory: {
                rss: expect.any(Number),
                heapTotal: expect.any(Number),
                heapUsed: expect.any(Number),
                external: expect.any(Number),
            },
        });
    });
});
