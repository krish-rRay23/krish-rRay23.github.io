const a={frontend:[{name:"React",level:95,color:"from-blue-400 to-blue-600",icon:"⚛️"},{name:"Vue.js",level:90,color:"from-green-400 to-green-600",icon:"🟢"},{name:"Svelte",level:85,color:"from-orange-400 to-orange-600",icon:"🔥"},{name:"TypeScript",level:92,color:"from-blue-500 to-blue-700",icon:"📘"},{name:"Next.js",level:88,color:"from-gray-700 to-gray-900",icon:"▲"},{name:"Astro",level:82,color:"from-purple-400 to-purple-600",icon:"🚀"}],backend:[{name:"Node.js",level:90,color:"from-green-500 to-green-700",icon:"🟢"},{name:"Express",level:88,color:"from-gray-600 to-gray-800",icon:"🚀"},{name:"Python",level:85,color:"from-yellow-400 to-yellow-600",icon:"🐍"},{name:"GraphQL",level:80,color:"from-pink-400 to-pink-600",icon:"🎯"},{name:"REST APIs",level:93,color:"from-indigo-400 to-indigo-600",icon:"🔗"},{name:"Microservices",level:78,color:"from-teal-400 to-teal-600",icon:"🧩"}],database:[{name:"MongoDB",level:87,color:"from-green-400 to-green-600",icon:"🍃"},{name:"PostgreSQL",level:83,color:"from-blue-400 to-blue-600",icon:"🐘"},{name:"Redis",level:80,color:"from-red-400 to-red-600",icon:"⚡"},{name:"Firebase",level:85,color:"from-yellow-400 to-orange-500",icon:"🔥"},{name:"MySQL",level:82,color:"from-blue-500 to-blue-700",icon:"🛢️"},{name:"Prisma",level:88,color:"from-indigo-400 to-purple-500",icon:"💎"}],tools:[{name:"Docker",level:85,color:"from-blue-400 to-cyan-500",icon:"🐳"},{name:"Git",level:95,color:"from-orange-500 to-red-500",icon:"📚"},{name:"AWS",level:78,color:"from-yellow-400 to-orange-500",icon:"☁️"},{name:"Netlify",level:90,color:"from-teal-400 to-green-500",icon:"🌐"},{name:"Figma",level:88,color:"from-purple-400 to-pink-500",icon:"🎨"},{name:"VS Code",level:98,color:"from-blue-500 to-blue-700",icon:"💻"}]};function i(){const t=document.getElementById("skills-container");if(!t)return;const o=`
			<div class="flex flex-wrap justify-center mb-8 bg-white dark:bg-gray-900 rounded-full p-2 shadow-lg max-w-2xl mx-auto">
				<button class="skill-tab active px-6 py-3 rounded-full font-semibold transition-all duration-300" data-category="frontend">Frontend</button>
				<button class="skill-tab px-6 py-3 rounded-full font-semibold transition-all duration-300" data-category="backend">Backend</button>
				<button class="skill-tab px-6 py-3 rounded-full font-semibold transition-all duration-300" data-category="database">Database</button>
				<button class="skill-tab px-6 py-3 rounded-full font-semibold transition-all duration-300" data-category="tools">Tools</button>
			</div>
			<div id="skills-content" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<!-- Skills will be rendered here -->
			</div>
		`;t.innerHTML=o,document.querySelectorAll(".skill-tab").forEach(l=>{l.addEventListener("click",()=>{const e=l.dataset.category;r(e),document.querySelectorAll(".skill-tab").forEach(n=>n.classList.remove("active")),l.classList.add("active")})}),r("frontend")}function r(t){const o=document.getElementById("skills-content"),l=a[t]||[];o.style.opacity="0",o.style.transform="translateY(20px)",setTimeout(()=>{o.innerHTML=l.map(e=>`
				<div class="skill-card bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
					<div class="flex items-center justify-between mb-4">
						<div class="flex items-center space-x-3">
							<span class="text-2xl">${e.icon}</span>
							<h3 class="text-lg font-semibold text-gray-900 dark:text-white">${e.name}</h3>
						</div>
						<span class="text-sm text-gray-500 dark:text-gray-400 font-medium">${e.level}%</span>
					</div>
					<div class="relative">
						<div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
							<div class="bg-gradient-to-r ${e.color} h-3 rounded-full skill-progress transition-all duration-1000 ease-out" style="width: 0%"></div>
						</div>
					</div>
				</div>
			`).join(""),o.style.opacity="1",o.style.transform="translateY(0)",setTimeout(()=>{document.querySelectorAll(".skill-progress").forEach((e,n)=>{setTimeout(()=>{e.style.width=l[n].level+"%"},n*100)})},200)},150)}document.addEventListener("DOMContentLoaded",i);
