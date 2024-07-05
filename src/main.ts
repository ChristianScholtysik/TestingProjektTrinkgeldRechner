import { calculateTips } from './calculateTip'
import './style.css'

const sumInput = document.getElementById("summe-input") as HTMLInputElement
const leuteInput = document.getElementById("leute-input") as HTMLInputElement
const qualitaetInput = document.getElementById("qualitaet") as HTMLSelectElement

const resultArea = document.getElementById("resultarea") as HTMLSelectElement
const resultTipOutputElement = document.getElementById("result-tip") as HTMLSelectElement
const resultPerPersonOutputElement = document.getElementById("result-perperson") as HTMLSelectElement
const resultTotalOutputElement = document.getElementById("result-total") as HTMLSelectElement


document.getElementById("calculate-tip-button")?.addEventListener("click", (event)=>{
  event.preventDefault()
  const sum = Number(sumInput.value);
  const leute = Number(leuteInput.value)
  const quality = Number(qualitaetInput.value)
  const results = calculateTips(sum, leute, quality)
  resultTipOutputElement.innerText = `Das Trinkeld ist: ${results.totalTip} EUR` 
  resultTotalOutputElement.innerText = `Die Gesamtsumme ist: ${results.totalWithTip} EUR` 
  resultPerPersonOutputElement.innerText = `Der Anteil pro Person ist: ${results.totalPerPerson} EUR` 
})

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
