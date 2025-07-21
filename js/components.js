// Lucide React icons as SVG components
const Check = ({ size = 24, className = "" }) => (
    React.createElement('svg', {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className
    }, React.createElement('polyline', { points: "20,6 9,17 4,12" }))
);

const ChefHat = ({ size = 24, className = "" }) => (
    React.createElement('svg', {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className
    }, 
    React.createElement('path', { d: "M17 21v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2" }),
    React.createElement('path', { d: "M19 21V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14" }),
    React.createElement('path', { d: "M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1H6V4z" })
    )
);

const Clock = ({ size = 24, className = "" }) => (
    React.createElement('svg', {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className
    },
    React.createElement('circle', { cx: "12", cy: "12", r: "10" }),
    React.createElement('polyline', { points: "12,6 12,12 16,14" })
    )
);

const Users = ({ size = 24, className = "" }) => (
    React.createElement('svg', {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className
    },
    React.createElement('path', { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
    React.createElement('circle', { cx: "9", cy: "7", r: "4" }),
    React.createElement('path', { d: "M23 21v-2a4 4 0 0 0-3-3.87" }),
    React.createElement('path', { d: "M16 3.13a4 4 0 0 1 0 7.75" })
    )
);

const ShoppingCart = ({ size = 24, className = "" }) => (
    React.createElement('svg', {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className
    },
    React.createElement('circle', { cx: "8", cy: "21", r: "1" }),
    React.createElement('circle', { cx: "19", cy: "21", r: "1" }),
    React.createElement('path', { d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" })
    )
);

const X = ({ size = 24, className = "" }) => (
    React.createElement('svg', {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className
    },
    React.createElement('line', { x1: "18", y1: "6", x2: "6", y2: "18" }),
    React.createElement('line', { x1: "6", y1: "6", x2: "18", y2: "18" })
    )
);

const BookOpen = ({ size = 24, className = "" }) => (
    React.createElement('svg', {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className
    },
    React.createElement('path', { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }),
    React.createElement('path', { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" })
    )
);
