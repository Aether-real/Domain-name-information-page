       // 获取当前日期
        const currentDate = new Date();
        // 设置域名到期时间
        const expirationDate = new Date('2025-01-01T00:00:00');

        // 计算两个日期之间的差异
        const timeDiff = expirationDate - currentDate; // 结果单位为毫秒
        const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // 将毫秒转换为天

        // 显示到期天数
        document.getElementById('daysRemaining').textContent = daysRemaining > 0 ? daysRemaining : 0;