import React, { useState, useEffect, useRef } from "react";
import { 
  Play, Plus, Shield, Check, RefreshCw, Sparkles, 
  Cloud, Sun, CloudRain, ShoppingCart, FileText, Database, Edit, UserCheck, Layout
} from "lucide-react";

interface SandboxProps {
  projectId: number;
  darkMode: boolean;
}

export default function ProjectSandbox({ projectId, darkMode }: SandboxProps) {
  const containerClass = `w-full h-full p-4 rounded-2xl flex flex-col justify-start overflow-hidden text-xs font-sans ${
    darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-800"
  }`;

  // ==========================================
  // PROJECT 1: STUDENT MANAGEMENT (PHP)
  // ==========================================
  const [phpStudents, setPhpStudents] = useState([
    { id: "101", name: "Rahul Verma", attendance: 82, grade: "A" },
    { id: "102", name: "Renu Pareta", attendance: 96, grade: "A+" },
    { id: "103", name: "Kunal Sen", attendance: 68, grade: "B" }
  ]);
  const [newSName, setNewSName] = useState("");
  const [newSAtt, setNewSAtt] = useState("");
  
  const handleAddPHPStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSName || !newSAtt) return;
    const attNum = parseInt(newSAtt) || 0;
    const grade = attNum >= 90 ? "A+" : attNum >= 75 ? "A" : "B";
    setPhpStudents([
      ...phpStudents,
      { id: String(101 + phpStudents.length), name: newSName, attendance: attNum, grade }
    ]);
    setNewSName("");
    setNewSAtt("");
  };

  // ==========================================
  // PROJECT 2: EVENT MANAGEMENT SYSTEM (PYTHON)
  // ==========================================
  const [events, setEvents] = useState([
    { name: "Anita Sharma", category: "VIP", checkedIn: true },
    { name: "Vijay Keshri", category: "Standard", checkedIn: false }
  ]);
  const [guestName, setGuestName] = useState("");
  const [guestCat, setGuestCat] = useState("Standard");

  const handleRegisterEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName) return;
    setEvents([...events, { name: guestName, category: guestCat, checkedIn: false }]);
    setGuestName("");
  };

  // ==========================================
  // PROJECT 3: POLICE COMPLAINT (PYTHON)
  // ==========================================
  const [firList, setFirList] = useState([
    { id: "FIR-442", title: "Identity Theft", reporter: "Rajesh Mehta", status: "Investigating" },
    { id: "FIR-443", title: "Bicycle Lost in Nagar", reporter: "Suman Lal", status: "Resolved" }
  ]);
  const [complaintTitle, setComplaintTitle] = useState("");
  const [reporter, setReporter] = useState("");

  const handleFileFIR = (e: React.FormEvent) => {
    e.preventDefault();
    if (!complaintTitle || !reporter) return;
    const randomId = "FIR-" + Math.floor(400 + Math.random() * 600);
    setFirList([...firList, { id: randomId, title: complaintTitle, reporter, status: "Submitted" }]);
    setComplaintTitle("");
    setReporter("");
  };

  // ==========================================
  // PROJECT 4: CLOTH MANAGEMENT SYSTEM (PYTHON)
  // ==========================================
  const [clothingInventory, setClothingInventory] = useState([
    { sku: "CTL-91", name: "Oversized Cotton Tee", price: 499, stock: 4 },
    { sku: "CTL-92", name: "Premium Slim Jeans", price: 1299, stock: 15 },
    { sku: "CTL-93", name: "Waterproof Winter Parka", price: 2499, stock: 2 }
  ]);

  const restockClothItem = (sku: string) => {
    setClothingInventory(prev => prev.map(item => item.sku === sku ? { ...item, stock: item.stock + 5 } : item));
  };

  // ==========================================
  // PROJECT 5: HOTEL MANAGEMENT SYSTEM (PYTHON)
  // ==========================================
  const [hotelRooms, setHotelRooms] = useState([
    { number: "101", type: "Deluxe Suite", rate: 2500, status: "Vacant" },
    { number: "102", type: "Executive Double", rate: 3500, status: "Booked" },
    { number: "103", type: "Single Cozy Bed", rate: 1500, status: "Vacant" }
  ]);

  const toggleHotelRoomStatus = (roomNo: string) => {
    setHotelRooms(prev => prev.map(r => r.number === roomNo ? { ...r, status: r.status === "Vacant" ? "Booked" : "Vacant" } : r));
  };

  // ==========================================
  // PROJECT 6: JEWELLERY SHOP (PYTHON)
  // ==========================================
  const [goldWeight, setGoldWeight] = useState("10");
  const [goldRate, setGoldRate] = useState("6800");
  const [makingCharges, setMakingCharges] = useState("12");

  const weightNum = parseFloat(goldWeight) || 0;
  const rateNum = parseFloat(goldRate) || 0;
  const makingPct = parseFloat(makingCharges) || 0;

  const rawCost = weightNum * rateNum;
  const makingValue = rawCost * (makingPct / 100);
  const gstValue = (rawCost + makingValue) * 0.03;
  const finalBill = rawCost + makingValue + gstValue;

  // ==========================================
  // PROJECT 7: EMPLOYEE MANAGEMENT (JAVA)
  // ==========================================
  const [staff, setStaff] = useState([
    { name: "Devidutt Vyas", department: "SDE-1", salary: 55000 },
    { name: "Divya Pareta", department: "QA Analyst", salary: 48000 }
  ]);
  const [appreciationIndex, setAppreciationIndex] = useState<number | null>(null);

  const grantBonus = (index: number) => {
    setStaff(prev => prev.map((p, idx) => idx === index ? { ...p, salary: Math.round(p.salary * 1.15) } : p));
    setAppreciationIndex(index);
    setTimeout(() => setAppreciationIndex(null), 1000);
  };

  // ==========================================
  // PROJECT 8: STUDENT TRANSCRIPT (JAVA)
  // ==========================================
  const [javaGrades, setJavaGrades] = useState({ math: "A", dsa: "B", dbms: "A+" });
  const gradeToPoints = (g: string) => {
    if (g === "A+") return 10;
    if (g === "A") return 9;
    if (g === "B+") return 8;
    if (g === "B") return 7;
    return 6;
  };
  const cgpaAverage = ((gradeToPoints(javaGrades.math) + gradeToPoints(javaGrades.dsa) + gradeToPoints(javaGrades.dbms)) / 3).toFixed(2);

  // ==========================================
  // PROJECT 9: ZOMATO CLONE
  // ==========================================
  const [cart, setCart] = useState<{ id: number, name: string, price: number, qty: number }[]>([]);
  const pizzaMenu = [
    { id: 1, name: "Spicy Pepperoni Pizza", price: 299, desc: "Classic cheesy red sauce" },
    { id: 2, name: "Garden Treat Pizza", price: 249, desc: "Bell peppers & mushrooms" }
  ];

  const addToCart = (item: { id: number, name: string, price: number }) => {
    const existing = cart.find(c => c.id === item.id);
    if (existing) {
      setCart(cart.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  // ==========================================
  // PROJECT 10: SCANNER SIMULATOR
  // ==========================================
  const [contrast, setContrast] = useState(110);
  const [brightness, setBrightness] = useState(105);
  const [monochrome, setMonochrome] = useState(false);

  // ==========================================
  // PROJECT 11: WEATHER API
  // ==========================================
  const [weatherCity, setWeatherCity] = useState("Kota");
  const weatherDatabase: Record<string, { temp: number, humidity: number, wind: number, condition: string, bg: string }> = {
    kota: { temp: 34, humidity: 38, wind: 12, condition: "Sunny", bg: "from-amber-400/20 to-orange-500/10" },
    delhi: { temp: 36, humidity: 45, wind: 15, condition: "Partly Cloudy", bg: "from-indigo-400/20 to-purple-500/10" },
    jaipur: { temp: 38, humidity: 25, wind: 10, condition: "Warm and Windy", bg: "from-yellow-400/20 to-amber-500/10" },
    mumbai: { temp: 29, humidity: 85, wind: 20, condition: "Tropical Rain", bg: "from-blue-400/20 to-indigo-500/10" },
    london: { temp: 16, humidity: 75, wind: 14, condition: "Chilly Overcast", bg: "from-slate-400/20 to-blue-500/10" }
  };
  const normalizedCity = weatherCity.toLowerCase().trim();
  const weatherInfo = weatherDatabase[normalizedCity] || weatherDatabase["kota"];

  // ==========================================
  // PROJECT 12: GAME PROJECT
  // ==========================================
  const [shipPos, setShipPos] = useState(50);
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);

  // ==========================================
  // PROJECT 13: SQL SCHEMAS
  // ==========================================
  const [selectedQuery, setSelectedQuery] = useState("SELECT * FROM orders LIMIT 3;");
  const queryResult: Record<string, any[]> = {
    "SELECT * FROM orders LIMIT 3;": [
      { order_id: 1042, rider_id: 48, amount: "$450.00", status: "Delivered" },
      { order_id: 1043, rider_id: 52, amount: "$120.50", status: "Dispatched" }
    ],
    "SELECT rider_id, COUNT(*) FROM orders GROUP BY rider_id;": [
      { rider_id: 48, count: 12, vehicle: "Electric Bike" },
      { rider_id: 52, count: 8, vehicle: "Bicycle" }
    ],
    "SELECT * FROM riders WHERE vehicle = 'Electric Bike';": [
      { rider_id: 48, name: "Harish G.", state: "Active", rating: "4.8★" }
    ]
  };

  // ==========================================
  // PROJECT 14: BOOK EDITOR
  // ==========================================
  const [editorText, setEditorText] = useState(
    "Chapters: The Cybernetic Loom.\n\nIn the ancient sandstone suburbs of Rajasthan, young digital pioneers spun micro-protocols to manage local books."
  );
  const [fontStyle, setFontStyle] = useState<"normal" | "serif" | "mono">("mono");
  const wordCount = editorText.trim() === "" ? 0 : editorText.trim().split(/\s+/).length;

  switch (projectId) {
    case 1:
      return (
        <div className={containerClass}>
          <div className="flex items-center justify-between border-b border-purple-500/20 pb-2 mb-3">
            <span className="font-mono font-bold tracking-tight text-purple-500 flex items-center gap-1.5">
              <Database className="h-3.5 w-3.5 animate-pulse" /> STUDENT SYSTEM (PHP CORE)
            </span>
          </div>

          <form onSubmit={handleAddPHPStudent} className="grid grid-cols-5 gap-2 mb-4 bg-slate-900/40 p-2 border border-purple-500/10 rounded-xl">
            <input 
              type="text" 
              placeholder="Full Name" 
              required
              value={newSName} 
              onChange={e => setNewSName(e.target.value)}
              className="col-span-2 px-2.5 py-1.5 focus:outline-none bg-slate-100 dark:bg-slate-950 border border-purple-900/50 rounded-lg text-[11px]"
            />
            <input 
              type="number" 
              placeholder="Attendance %" 
              required
              max="100" 
              value={newSAtt} 
              onChange={e => setNewSAtt(e.target.value)}
              className="col-span-2 px-2.5 py-1.5 focus:outline-none bg-slate-100 dark:bg-slate-950 border border-purple-900/50 rounded-lg text-[11px]"
            />
            <button 
              type="submit" 
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center justify-center transition cursor-pointer"
            >
              <Plus className="h-4 w-4" />
            </button>
          </form>

          <div className="flex-1 overflow-y-auto space-y-1.5">
            {phpStudents.map((st) => (
              <div 
                key={st.id} 
                className={`p-2 border rounded-xl flex items-center justify-between ${
                  st.attendance < 75 
                    ? "bg-red-500/5 border-red-500/20 text-red-400" 
                    : darkMode 
                      ? "bg-slate-900/60 border-purple-900/15" 
                      : "bg-white border-purple-100"
                }`}
              >
                <div>
                  <p className="font-bold">{st.name}</p>
                  <p className="text-[9px] text-slate-500">ID: {st.id}</p>
                </div>
                <div className="text-right">
                  <span className="font-mono font-bold">{st.attendance}% Present</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 2:
      return (
        <div className={containerClass}>
          <div className="flex items-center justify-between border-b border-blue-500/20 pb-2 mb-3">
            <span className="font-mono font-bold tracking-tight text-blue-500 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5" /> EVENT REGISTRY (PYTHON)
            </span>
          </div>

          <form onSubmit={handleRegisterEvent} className="grid grid-cols-5 gap-2 mb-4 bg-slate-900/40 p-2 border border-blue-500/10 rounded-xl">
            <input 
              type="text" 
              placeholder="Guest Name" 
              required
              value={guestName} 
              onChange={e => setGuestName(e.target.value)}
              className="col-span-2 px-2 py-1.5 bg-slate-100 dark:bg-slate-950 border border-blue-900/50 rounded-lg text-[11px] focus:outline-none"
            />
            <select 
              value={guestCat} 
              onChange={e => setGuestCat(e.target.value)} 
              className="col-span-2 px-1 py-1.5 bg-slate-100 dark:bg-slate-950 border border-blue-900/50 rounded-lg text-[11px] focus:outline-none"
            >
              <option value="VIP">VIP</option>
              <option value="Standard">Standard</option>
            </select>
            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition cursor-pointer"
            >
              <Plus className="h-4 w-4" />
            </button>
          </form>

          <div className="flex-1 overflow-y-auto space-y-1.5">
            {events.map((g, idx) => (
              <div 
                key={idx} 
                className={`p-2 border rounded-xl flex items-center justify-between ${
                  darkMode ? "bg-slate-900/60 border-blue-900/15" : "bg-white border-blue-100"
                }`}
              >
                <div>
                  <p className="font-bold">{g.name}</p>
                  <p className="text-[9px] text-slate-500">Tier: {g.category}</p>
                </div>
                <button 
                  onClick={() => setEvents(events.map((ev, i) => i === idx ? { ...ev, checkedIn: !ev.checkedIn } : ev))}
                  className={`text-[9px] font-mono px-2 py-1 rounded-full ${
                    g.checkedIn ? "bg-emerald-500/10 text-emerald-500" : "bg-slate-500/10 text-slate-400"
                  }`}
                >
                  {g.checkedIn ? "Checked In" : "Pending"}
                </button>
              </div>
            ))}
          </div>
        </div>
      );

    case 3:
      return (
        <div className={containerClass}>
          <div className="flex items-center justify-between border-b border-red-500/20 pb-2 mb-3">
            <span className="font-mono font-bold tracking-tight text-red-500 flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5" /> PRECINCT DESK (PYTHON FIR)
            </span>
          </div>

          <form onSubmit={handleFileFIR} className="grid grid-cols-5 gap-1.5 mb-4 bg-slate-900/40 p-2 border border-red-500/10 rounded-xl">
            <input 
              type="text" 
              placeholder="Complaint Title" 
              required
              value={complaintTitle} 
              onChange={e => setComplaintTitle(e.target.value)}
              className="col-span-2 px-2 py-1 bg-slate-100 dark:bg-slate-950 border border-red-900/40 rounded text-[10px] focus:outline-none"
            />
            <input 
              type="text" 
              placeholder="Reporter" 
              required
              value={reporter} 
              onChange={e => setReporter(e.target.value)}
              className="col-span-2 px-2 py-1 bg-slate-100 dark:bg-slate-950 border border-red-900/40 rounded text-[10px] focus:outline-none"
            />
            <button 
              type="submit" 
              className="bg-red-600 hover:bg-red-700 text-white rounded flex items-center justify-center transition cursor-pointer"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </form>

          <div className="flex-1 overflow-y-auto space-y-1.5">
            {firList.map((fir) => (
              <div 
                key={fir.id} 
                className={`p-2 border rounded-xl flex items-center justify-between ${
                  darkMode ? "bg-slate-900/60 border-red-900/15" : "bg-white border-red-100"
                }`}
              >
                <div>
                  <p className="font-bold">{fir.title}</p>
                  <p className="text-[9px] text-slate-500">Filed by: {fir.reporter} • {fir.id}</p>
                </div>
                <button 
                  onClick={() => setFirList(firList.map(item => item.id === fir.id ? { ...item, status: item.status === "Resolved" ? "Investigating" : "Resolved" } : item))}
                  className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                    fir.status === "Resolved" ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"
                  }`}
                >
                  {fir.status}
                </button>
              </div>
            ))}
          </div>
        </div>
      );

    case 4:
      return (
        <div className={containerClass}>
          <div className="flex items-center justify-between border-b border-teal-500/20 pb-2 mb-3">
            <span className="font-mono font-bold tracking-tight text-teal-400 flex items-center gap-1.5">
              <ShoppingCart className="h-3.5 w-3.5" /> CLOTH INVENTORY (PYTHON)
            </span>
          </div>

          <div className="flex-1 space-y-1.5 overflow-y-auto">
            {clothingInventory.map((item) => (
              <div 
                key={item.sku} 
                className={`p-2 border rounded-xl flex items-center justify-between ${
                  darkMode ? "bg-slate-900/60 border-teal-900/15" : "bg-white border-teal-100"
                }`}
              >
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-[9px] text-slate-500">SKU: {item.sku} • Price: ₹{item.price}</p>
                </div>
                <div className="text-right flex items-center gap-2">
                  <span className="font-mono font-bold">{item.stock} in stock</span>
                  <button 
                    onClick={() => restockClothItem(item.sku)}
                    className="bg-teal-600 hover:bg-teal-700 text-white rounded px-2 py-1 text-[9px] font-bold cursor-pointer"
                  >
                    +5
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 5:
      return (
        <div className={containerClass}>
          <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2 mb-3">
            <span className="font-mono font-bold tracking-tight text-cyan-400 flex items-center gap-1.5">
              <Database className="h-3.5 w-3.5" /> HOTEL ROOMS (PYTHON)
            </span>
          </div>

          <div className="flex-1 space-y-1.5 overflow-y-auto">
            {hotelRooms.map((r) => (
              <div 
                key={r.number} 
                className={`p-2 border rounded-xl flex items-center justify-between ${
                  darkMode ? "bg-slate-900/60 border-cyan-900/15" : "bg-white border-cyan-100"
                }`}
              >
                <div>
                  <p className="font-bold">Room {r.number} ({r.type})</p>
                  <p className="text-[9px] text-slate-500">Rate: ₹{r.rate}/night</p>
                </div>
                <button 
                  onClick={() => toggleHotelRoomStatus(r.number)}
                  className={`text-[9px] font-bold px-2 py-1 rounded-md ${
                    r.status === "Vacant" ? "bg-emerald-600 text-white" : "bg-slate-600 text-slate-300"
                  }`}
                >
                  {r.status === "Vacant" ? "Book Room" : "Checkout"}
                </button>
              </div>
            ))}
          </div>
        </div>
      );

    case 6:
      return (
        <div className={containerClass}>
          <div className="flex items-center justify-between border-b border-amber-500/20 pb-2 mb-3">
            <span className="font-mono font-bold tracking-tight text-amber-500 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" /> JEWELLERY BILLING (PYTHON)
            </span>
          </div>

          <div className="p-2 border border-amber-500/10 rounded-xl space-y-2 mb-3">
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div>
                <label className="block text-slate-500 font-bold">Gold Weight (g):</label>
                <input 
                  type="number" 
                  value={goldWeight} 
                  onChange={e => setGoldWeight(e.target.value)} 
                  className="w-full px-2 py-1 bg-slate-100 dark:bg-slate-950 border border-amber-950 rounded text-amber-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-slate-500 font-bold">Gold Rate (₹/g):</label>
                <input 
                  type="number" 
                  value={goldRate} 
                  onChange={e => setGoldRate(e.target.value)} 
                  className="w-full px-2 py-1 bg-slate-100 dark:bg-slate-950 border border-amber-950 rounded text-amber-400 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-[8px] text-slate-500 font-bold">Making Charges ({makingCharges}%):</label>
              <input 
                type="range" 
                min="1" 
                max="30" 
                value={makingCharges} 
                onChange={e => setMakingCharges(e.target.value)} 
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>
          </div>

          <div className="p-2.5 rounded-xl border border-amber-950/30 text-[10px] font-mono text-slate-300 space-y-1">
            <div className="flex justify-between">
              <span>Gold Raw Metal Cost:</span>
              <span>₹{rawCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between border-b border-amber-500/20 pb-1 mb-1">
              <span>GST & Making:</span>
              <span>₹{Math.round(makingValue + gstValue).toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-amber-500 text-xs font-bold">
              <span>ESTIMATED BILL:</span>
              <span>₹{Math.round(finalBill).toLocaleString()}</span>
            </div>
          </div>
        </div>
      );

    case 7:
      return (
        <div className={containerClass}>
          <div className="flex items-center justify-between border-b border-pink-500/20 pb-2 mb-3">
            <span className="font-mono font-bold tracking-tight text-pink-500 flex items-center gap-1.5">
              <UserCheck className="h-3.5 w-3.5" /> EMPLOYEE TRACKER (JAVA)
            </span>
          </div>

          <div className="flex-1 space-y-1.5 overflow-y-auto">
            {staff.map((p, idx) => (
              <div 
                key={idx} 
                className={`p-2 border rounded-xl flex items-center justify-between transition-all ${
                  appreciationIndex === idx ? "bg-pink-500/10 border-pink-500/40 text-pink-400" : darkMode ? "bg-slate-900/60 border-pink-900/15" : "bg-white border-pink-100"
                }`}
              >
                <div>
                  <p className="font-bold">{p.name}</p>
                  <p className="text-[9px] text-slate-500">{p.department}</p>
                </div>
                <div className="text-right flex items-center gap-2">
                  <span className="font-mono font-bold">₹{p.salary.toLocaleString()}</span>
                  <button 
                    onClick={() => grantBonus(idx)}
                    className="bg-pink-600 hover:bg-pink-700 text-white font-bold p-1 rounded transition text-[9px] cursor-pointer"
                  >
                    +15% Bonus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 8:
      return (
        <div className={containerClass}>
          <div className="flex items-center justify-between border-b border-indigo-500/20 pb-2 mb-3">
            <span className="font-mono font-bold tracking-tight text-indigo-400 flex items-center gap-1.5">
              <FileText className="h-3.5 w-3.5 text-indigo-400" /> ACADEMIC GPA (JAVA)
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-4 bg-slate-900/40 p-2 rounded-xl">
            {Object.keys(javaGrades).map(subj => (
              <div key={subj}>
                <label className="block text-[8px] text-slate-500 font-bold uppercase mb-1">{subj}:</label>
                <select 
                  value={(javaGrades as any)[subj]} 
                  onChange={e => setJavaGrades({ ...javaGrades, [subj]: e.target.value })}
                  className="w-full px-2 py-1 bg-slate-100 dark:bg-slate-950 border border-indigo-950 rounded text-indigo-400 text-xs font-mono font-bold cursor-pointer focus:outline-none"
                >
                  <option value="A+">A+ [10]</option>
                  <option value="A">A [9]</option>
                  <option value="B+">B+ [8]</option>
                  <option value="B">B [7]</option>
                </select>
              </div>
            ))}
          </div>

          <div className="flex-1 bg-gradient-to-br from-indigo-950/20 to-purple-950/20 border border-indigo-500/10 rounded-xl p-3 flex flex-col justify-between">
            <div className="space-y-1 font-mono text-[10px]">
              {Object.entries(javaGrades).map(([subj, grade]) => (
                <div key={subj} className="flex justify-between">
                  <span className="capitalize">{subj} course grade:</span>
                  <span className="font-bold text-slate-200">{grade}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center border-t border-indigo-500/10 pt-2">
              <span className="text-[10px] text-slate-500 font-bold">CGPA SCORE:</span>
              <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                {cgpaAverage} / 10.00
              </span>
            </div>
          </div>
        </div>
      );

    case 9:
      return (
        <div className={containerClass}>
          <div className="flex items-center justify-between border-b border-rose-500/20 pb-2 mb-2">
            <span className="font-mono font-bold tracking-tight text-rose-500">
              🍔 ZOMATO CLONE INTERFACE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 flex-1 overflow-hidden">
            <div className="space-y-1.5 overflow-y-auto pr-1">
              {pizzaMenu.map(p => (
                <div key={p.id} className="p-2 border border-rose-950 bg-slate-900/30 rounded-xl flex items-center justify-between gap-1">
                  <div>
                    <h5 className="font-bold text-[10px]">{p.name}</h5>
                    <span className="text-rose-400 font-bold font-mono text-[9px]">₹{p.price}</span>
                  </div>
                  <button 
                    onClick={() => addToCart(p)}
                    className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-1 px-2 rounded-lg text-[9px] cursor-pointer"
                  >
                    Add
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-slate-900/50 p-2 border border-rose-950 rounded-xl flex flex-col justify-between overflow-hidden">
              <div className="flex-1 overflow-y-auto space-y-1">
                {cart.length === 0 ? (
                  <div className="h-full flex items-center justify-center text-slate-500 text-[9px]">Cart is empty</div>
                ) : (
                  cart.map(c => (
                    <div key={c.id} className="flex justify-between items-center text-[9px] font-mono border-b border-rose-950/30 py-1">
                      <span className="truncate w-20">{c.name}</span>
                      <span>×{c.qty}</span>
                      <span className="font-bold">₹{c.price * c.qty}</span>
                    </div>
                  ))
                )}
              </div>
              <div className="border-t border-rose-950/40 pt-1 flex justify-between items-center text-rose-500 font-bold">
                <span>SUBTOTAL:</span>
                <span>₹{cart.reduce((sum, c) => sum + (c.price * c.qty), 0)}</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 10:
      return (
        <div className={containerClass}>
          <div className="flex items-center justify-between border-b border-sky-500/20 pb-2 mb-3">
            <span className="font-mono font-bold tracking-tight text-sky-400 flex items-center gap-1.5">
              <Layout className="h-3.5 w-3.5 animate-pulse" /> SCANNER RENDERING CONTROLS
            </span>
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div className="h-24 border border-sky-950 bg-slate-900 rounded-xl flex items-center justify-center p-3 relative">
              <div 
                style={{ 
                  filter: `contrast(${contrast}%) brightness(${brightness}%) ${monochrome ? "grayscale(100%)" : ""}` 
                }}
                className="w-12 h-12 rounded bg-gradient-to-tr from-sky-400 to-indigo-600 flex items-center justify-center shadow-lg transition-all"
              >
                <FileText className="h-6 w-6 text-white" />
              </div>
            </div>

            <div className="space-y-1 text-[10px]">
              <div>
                <label className="block text-slate-500 font-bold">Contrast ({contrast}%)</label>
                <input 
                  type="range" 
                  min="50" 
                  max="200" 
                  value={contrast} 
                  onChange={e => setContrast(parseInt(e.target.value))} 
                  className="w-full accent-sky-400 cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-slate-500 font-bold">Brightness ({brightness}%)</label>
                <input 
                  type="range" 
                  min="50" 
                  max="200" 
                  value={brightness} 
                  onChange={e => setBrightness(parseInt(e.target.value))} 
                  className="w-full accent-sky-400 cursor-pointer"
                />
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-slate-500 font-bold">Monochrome:</span>
                <input 
                  type="checkbox" 
                  checked={monochrome} 
                  onChange={e => setMonochrome(e.target.checked)} 
                  className="accent-sky-400 h-4 w-4 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      );

    case 11:
      return (
        <div className={containerClass}>
          <div className="flex items-center justify-between border-b border-indigo-500/20 pb-2 mb-3">
            <span className="font-mono font-bold tracking-tight text-indigo-400 flex items-center gap-1.5">
              <Cloud className="h-3.5 w-3.5" /> WEATHER API SIMULATOR
            </span>
          </div>

          <div className="flex gap-1 mb-2">
            {["Kota", "Jaipur", "Delhi", "Mumbai"].map(city => (
              <button 
                key={city}
                onClick={() => setWeatherCity(city)}
                className={`flex-1 py-1 rounded text-[9px] font-mono font-bold border transition cursor-pointer ${
                  weatherCity === city 
                    ? "bg-indigo-600 text-white border-indigo-500" 
                    : "bg-slate-900 border-indigo-950 text-slate-400"
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          <div className={`flex-1 rounded-xl p-3 bg-gradient-to-br ${weatherInfo.bg} border border-indigo-500/10 flex flex-col justify-between`}>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-xs font-bold">{weatherCity}, IN</h4>
                <p className="text-[9px] text-slate-500 font-mono">Report: {weatherInfo.condition}</p>
              </div>
              {weatherInfo.condition.includes("Sunny") || weatherInfo.condition.includes("Warm") ? (
                <Sun className="h-6 w-6 text-amber-500 animate-spin" style={{ animationDuration: "12s" }} />
              ) : (
                <CloudRain className="h-6 w-6 text-blue-400" />
              )}
            </div>

            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-xl font-display font-light text-white">{weatherInfo.temp}°C</span>
              <span className="text-[10px] text-indigo-400 font-mono">/ RH {weatherInfo.humidity}%</span>
            </div>
          </div>
        </div>
      );

    case 12:
      return (
        <div className={containerClass}>
          <div className="flex items-center justify-between border-b border-pink-500/20 pb-2 mb-2">
            <span className="font-mono font-bold tracking-tight text-pink-500">
              🚀 CODESPACE ARCADIA GAME
            </span>
            <span className="text-[9px] font-mono text-pink-400">
              Score: {score} pts
            </span>
          </div>

          <div className="flex-1 bg-slate-950 border border-pink-950 rounded-xl relative overflow-hidden h-40 flex flex-col justify-center items-center p-3">
            {!gameActive ? (
              <div className="flex flex-col items-center gap-2">
                <span className="text-[10px] font-mono text-slate-400 select-none">Astro Space Obstacle Code</span>
                <button 
                  onClick={() => {
                    setScore(120);
                    setGameActive(true);
                  }}
                  className="bg-pink-600 hover:bg-pink-700 text-white font-mono font-bold px-3 py-1.5 rounded text-[10px] cursor-pointer animate-pulse"
                >
                  <Play className="h-3 w-3 inline mr-1 fill-current" /> RUN SIMULATOR CMD
                </button>
              </div>
            ) : (
              <div className="w-full flex-1 flex flex-col justify-between">
                <span className="text-[9px] text-emerald-400 font-mono">LOG: Interstellar physics loop compiled successfully.</span>
                <div className="flex justify-between items-center mt-4">
                  <button onClick={() => setScore(s => s + 10)} className="bg-slate-800 text-pink-400 px-3 py-1 rounded text-xs cursor-pointer">+10 pts</button>
                  <button onClick={() => setGameActive(false)} className="text-slate-500 text-[8px] underline cursor-pointer">Stop</button>
                </div>
              </div>
            )}
          </div>
        </div>
      );

    case 13:
      return (
        <div className={containerClass}>
          <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2 mb-3">
            <span className="font-mono font-bold tracking-tight text-emerald-500 flex items-center gap-1.5">
              <Database className="h-3.5 w-3.5 text-emerald-500" /> DBMS SQL INTERFACE
            </span>
          </div>

          <div className="mb-2">
            <label className="block text-[8px] font-mono text-slate-500 uppercase font-bold mb-1">
              Select SQL Query:
            </label>
            <select 
              value={selectedQuery} 
              onChange={e => setSelectedQuery(e.target.value)}
              className="w-full px-2 py-1.5 bg-slate-100 dark:bg-slate-950 border border-emerald-950 rounded text-emerald-400 text-[10px] font-mono cursor-pointer focus:outline-none"
            >
              <option value="SELECT * FROM orders LIMIT 3;">SELECT * FROM orders LIMIT 3;</option>
              <option value="SELECT rider_id, COUNT(*) FROM orders GROUP BY rider_id;">SELECT rider_id, COUNT(*) GROUP BY...</option>
              <option value="SELECT * FROM riders WHERE vehicle = 'Electric Bike';">SELECT * FROM riders WHERE vehicle =...</option>
            </select>
          </div>

          <div className="flex-1 bg-slate-150 dark:bg-slate-950 rounded-xl p-2 overflow-auto font-mono text-[9px] text-slate-300">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-emerald-950 text-slate-400">
                  {Object.keys(queryResult[selectedQuery]?.[0] || {}).map(head => (
                    <th key={head} className="pb-1 uppercase text-[8px] font-bold">{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(queryResult[selectedQuery] || []).map((row, idx) => (
                  <tr key={idx} className="border-b border-emerald-950/20">
                    {Object.values(row).map((val, colIdx) => (
                      <td key={colIdx} className="py-1 text-slate-200">{String(val)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case 14:
      return (
        <div className={containerClass}>
          <div className="flex items-center justify-between border-b border-fuchsia-500/20 pb-2 mb-3">
            <span className="font-mono font-bold tracking-tight text-fuchsia-500 flex items-center gap-1.5">
              <Edit className="h-3.5 w-3.5" /> NOVEL PUBLISHING DRAFT
            </span>
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <textarea 
              value={editorText}
              onChange={e => setEditorText(e.target.value)}
              className={`w-full flex-1 p-2 bg-slate-100 dark:bg-slate-950 border border-fuchsia-950/50 rounded-xl resize-none text-[11px] leading-relaxed text-slate-200 focus:outline-none ${
                fontStyle === "mono" ? "font-mono" : fontStyle === "serif" ? "font-serif" : "font-sans"
              }`}
            />
            
            <div className="mt-2 text-[9px] font-mono text-slate-400 flex justify-between items-center">
              <span>Word Total: <strong>{wordCount}</strong></span>
              <div className="flex gap-1">
                {["mono", "sans", "serif"].map(style => (
                  <button 
                    key={style}
                    onClick={() => setFontStyle(style as any)}
                    className={`px-1 rounded border text-[8px] ${fontStyle === style ? "bg-fuchsia-600 text-white" : ""}`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="h-full flex flex-col items-center justify-center p-4">
          <p className="text-[10px] text-slate-400 font-mono text-center">Initializing simulation engine...</p>
        </div>
      );
  }
}
