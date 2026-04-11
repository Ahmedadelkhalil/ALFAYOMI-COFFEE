/**
 * Performance Monitoring Utility
 * Helps identify bottlenecks and performance issues
 */

export const logPerformanceMetrics = () => {
  if (typeof window !== 'undefined' && window.performance) {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    const connectTime = perfData.responseEnd - perfData.requestStart;
    const renderTime = perfData.domComplete - perfData.domLoading;
    const domContentLoadedTime = perfData.domContentLoadedEventEnd - perfData.navigationStart;

    console.log('⏱️ Performance Metrics:');
    console.log(`   Page Load Time: ${pageLoadTime}ms`);
    console.log(`   Connect Time: ${connectTime}ms`);
    console.log(`   Render Time: ${renderTime}ms`);
    console.log(`   DOM Content Loaded Time: ${domContentLoadedTime}ms`);

    // Log Core Web Vitals if available
    if ('web-vital' in window) {
      console.log('📊 Core Web Vitals:');
      console.log(window['web-vital']);
    }
  }
};

/**
 * Measure function execution time
 * @param {string} label - Label for the measurement
 * @param {Function} fn - Function to measure
 * @returns {*} Function result
 */
export const measurePerformance = (label, fn) => {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  console.log(`⏱️ ${label}: ${(end - start).toFixed(2)}ms`);
  return result;
};

/**
 * Monitor React component renders
 * @param {string} componentName - Component name
 */
export const monitorComponentRender = (componentName) => {
  console.log(`🔄 Rendering: ${componentName}`);
};

// Log performance metrics when app loads
if (process.env.NODE_ENV === 'development') {
  window.addEventListener('load', () => {
    setTimeout(() => {
      logPerformanceMetrics();
    }, 0);
  });
}
