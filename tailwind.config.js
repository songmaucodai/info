const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      spacing: {
        '[120px]': '120px',  // Tùy chỉnh giá trị spacing 120px
        '[240px]': '240px',  // Tùy chỉnh giá trị spacing 240px
      },
      colors: {
        'light-blue': colors.lightBlue,  // Thêm màu 'light-blue' từ TailwindCSS
        cyan: colors.cyan,              // Thêm màu 'cyan' từ TailwindCSS
      },
    },
  },
  variants: {},
  plugins: [],
}
