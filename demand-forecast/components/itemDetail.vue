<template>
    <v-card class="tw-py-5" variant="flat">
        <v-card-title
            class="tw-text-4xl tw-font-extrabold tw-flex tw-flex-row tw-items-center tw-justify-center tw-space-y-5 tw-py-10">
            <img :src="image" :alt="name" class="tw-w-2/12 tw-h-2/12 tw-max-h-72" />
        </v-card-title>

        <v-card-text class="tw-text-2xl tw-font-bold tw-flex tw-flex-col tw-space-y-5 tw-px-60">
            <div>
                ชื่อ: {{ name }}
            </div>

            <div>
                ราคาต่อขวด: {{ price }}
            </div>

            <!-- <div class="tw-my-5">
                วิธีที่ใช้ในการพยากรณ์: {{ formular }}
            </div> -->


            <div class="tw-flex tw-flex-row tw-space-x-5 tw-items-center tw-pt-10 tw-py-5">
                <div>
                    ข้อมูลยอดขาย (สูงสุด 52 สัปดาห์)
                </div>
                <v-icon class="tw-bg-black tw-rounded-full tw-text-white"  @click="addInput">mdi-plus</v-icon>
                <v-icon class="tw-bg-black tw-rounded-full tw-text-white"  @click="deleteInput">mdi-minus</v-icon>
            </div>

            <!-- <div class="tw-grid tw-gap-y-5 tw-pt-10 tw-py-5">
                <div>
                    ข้อมูลยอดขาย (สูงสุด 52 สัปดาห์)
                </div>
                <div class="tw-flex tw-items-center tw-space-x-5">
                    <span>
                        จำนวนข้อมูลรายอาทิตย์
                    </span>
                    <v-responsive max-width="80">
                        <v-text-field clearable hide-details="auto"></v-text-field>
                    </v-responsive>
                </div>
            </div> -->

            <div class="tw-grid tw-grid-cols-4 tw-gap-5 tw-items-center">
                <div v-for="(data, index) in inputList">
                    <div class="tw-flex tw-flex-row tw-items-center tw-space-x-5">
                        <span>{{ index + 1 }}.</span>
                        <v-responsive class="mx-auto" max-width="400">
                            <v-text-field clearable hide-details="auto" :label="`สัปดาห์ที่ ${index + 1} `"
                                v-model="data.value"></v-text-field>
                        </v-responsive>
                    </div>
                </div>
                <v-icon class="tw-col-start-4 tw-justify-self-end" @click="addInput">mdi-plus</v-icon>
            </div>
        </v-card-text>

        <v-card-text class="tw-text-2xl tw-font-bold tw-flex tw-items-center tw-justify-center tw-space-y-5 ">
            <v-btn rounded class="tw-text-white tw-bg-blue-600 tw-w-36"
                @click="calSumX(), calSumY(), calMeanY(), getStandardDeviation(), calSumPower(), calSumXY(), calMeanX(), calB1(), calB0(), calPredict(),
                    calError(), calAbsError(), calErrorPower(), calMAD(), calOrderPerbottle(), calEOQ(), calROP(), saveData(), updateChart()"
                    :disabled="inputList.length !== 52">OK</v-btn>
        </v-card-text>
    </v-card>
    <hr class="tw-border-black tw-bg-black">

    <v-card class="tw-py-5" variant="flat">


        <div class="tw-p-5 tw-flex tw-justify-center">
            <div class="tw-flex tw-flex-col tw-space-y-5">
                <div class="tw-text-3xl tw-font-extrabold tw-justify-center tw-flex">กราฟแสดงผลเปรียบเทียบยอดขายรายสัปดาห์</div>
                <div class="tw-text-xl tw-font-extrabold tw-justify-center tw-flex">ค่าพยากรณ์ยอดขายสัปดาห์ถัดไป (หน่วย : ขวด)
                </div>
                <apexchart :key="series" height="400" width="1100" :options="options" :series="series"></apexchart>
                <!-- <button class="tw-bg-blue-500 tw-hover:bg-blue-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 rounded" @click="updateChart">
                    Change
                </button> -->
            </div>
        </div>

        <!-- <div class="tw-grid tw-grid-cols-3 tw-gap-5"> -->
            <!-- <div class="tw-col-span-3">
                <v-card-title
                    class="tw-text-2xl tw-font-extrabold tw-flex tw-flex-row tw-items-center tw-justify-center tw-space-y-5 tw-py-10">
                    Reorder Point:ROP (ขวด)
                </v-card-title>

                <v-card-text class="tw-text-2xl tw-font-bold tw-flex tw-items-center tw-justify-center tw-space-y-5 ">
                    <v-responsive class="mx-auto" max-width="250">
                        <v-text-field clearable hide-details="auto" label="ค่าพยากรณ์" v-model="ROP"></v-text-field>
                    </v-responsive>
                </v-card-text>
            </div> -->

            <div class="tw-col-span-3">
                <v-card-title
                    class="tw-text-2xl tw-font-extrabold tw-flex tw-flex-row tw-items-center tw-justify-center tw-space-y-5 tw-py-10">
                    ยอดพยากรณ์สัปดาห์ถัดไป
                </v-card-title>

                <v-card-text class="tw-text-2xl tw-font-bold tw-flex tw-items-center tw-justify-center tw-space-y-5 ">
                    <v-responsive class="mx-auto" max-width="250">
                        <v-text-field clearable hide-details="auto" label="ยอดขายรวมทุกสัปดาห์"
                            v-model="predictNextYear"></v-text-field>
                    </v-responsive>
                </v-card-text>
            </div>

            <!-- <div>
                <v-card-title
                    class="tw-text-2xl tw-font-extrabold tw-flex tw-flex-row tw-items-center tw-justify-center tw-space-y-5 tw-py-10">
                    ยอดขายรวม
                </v-card-title>

                <v-card-text class="tw-text-2xl tw-font-bold tw-flex tw-items-center tw-justify-center tw-space-y-5 ">
                    <v-responsive class="mx-auto" max-width="250">
                        <v-text-field clearable hide-details="auto" label="ยอดขายรวมทุกสัปดาห์"
                            v-model="sumY"></v-text-field>
                    </v-responsive>
                </v-card-text>
            </div> -->

            <!-- <div>
                <v-card-title
                    class="tw-text-2xl tw-font-extrabold tw-flex tw-flex-row tw-items-center tw-justify-center tw-space-y-5 tw-py-10">
                    ค่าเฉลี่ยสัมบูรณ์ของส่วนเบี่ยงเบน (MSD)
                    ค่าคลาดเคลื่อนกำลังสอง (MSD)
                </v-card-title>

                <v-card-text class="tw-text-2xl tw-font-bold tw-flex tw-items-center tw-justify-center tw-space-y-5 ">
                    <v-responsive class="mx-auto" max-width="250">
                        <v-text-field clearable hide-details="auto" label="ยอดขายรวมทุกสัปดาห์"
                            v-model="msd"></v-text-field>
                    </v-responsive>
                </v-card-text>
            </div> -->

            <div class="tw-flex tw-flex-row tw-justify-center tw-gap-x-20 tw-items-center">
                <div>
                    <v-card-title
                        class="tw-text-2xl tw-font-extrabold tw-flex tw-flex-row tw-items-center tw-justify-center tw-space-y-5 tw-py-10 tw-text-wrap tw-text-center">
                        Economic Order Quantity : EOQ (ขวด)
                    </v-card-title>

                    <v-card-text class="tw-text-2xl tw-font-bold tw-flex tw-items-center tw-justify-center tw-space-y-5 ">
                        <v-responsive class="mx-auto" max-width="250">
                            <v-text-field clearable hide-details="auto" label="ยอดขายรวมทุกสัปดาห์"
                                v-model="EOQ"></v-text-field>
                        </v-responsive>
                    </v-card-text>
                </div>

                <div>
                    <v-card-title
                        class="tw-text-2xl tw-font-extrabold tw-flex tw-flex-row tw-items-center tw-justify-center tw-space-y-5 tw-py-10">
                        Reorder Point:ROP (ขวด)
                    </v-card-title>

                    <v-card-text class="tw-text-2xl tw-font-bold tw-flex tw-items-center tw-justify-center tw-space-y-5 ">
                        <v-responsive class="mx-auto" max-width="250">
                            <v-text-field clearable hide-details="auto" label="ค่าพยากรณ์" v-model="ROP"></v-text-field>
                        </v-responsive>
                    </v-card-text>
                </div>
            </div>


            <!-- <div>
                <v-card-title
                    class="tw-text-2xl tw-font-extrabold tw-flex tw-flex-row tw-items-center tw-justify-center tw-space-y-5 tw-py-10">
                    ค่าเฉลี่ยยอดขายต่อสัปดาห์
                </v-card-title>

                <v-card-text class="tw-text-2xl tw-font-bold tw-flex tw-items-center tw-justify-center tw-space-y-5 ">
                    <v-responsive class="mx-auto" max-width="250">
                        <v-text-field clearable hide-details="auto" label="ยอดขายรวมทุกสัปดาห์"
                            v-model="meanY"></v-text-field>
                    </v-responsive>
                </v-card-text>
            </div>

            <div>
                <v-card-title
                    class="tw-text-2xl tw-font-extrabold tw-flex tw-flex-row tw-items-center tw-justify-center tw-space-y-5 tw-py-10">
                    ยอดพยากรณ์สัปดาห์ถัดไป
                </v-card-title>

                <v-card-text class="tw-text-2xl tw-font-bold tw-flex tw-items-center tw-justify-center tw-space-y-5 ">
                    <v-responsive class="mx-auto" max-width="250">
                        <v-text-field clearable hide-details="auto" label="ยอดขายรวมทุกสัปดาห์"
                            v-model="predictNextYear"></v-text-field>
                    </v-responsive>
                </v-card-text>
            </div> -->

            <!-- <div class="tw-flex tw-flex-row tw-justify-center tw-col-span-3 tw-gap-x-20">
                <div>
                    <v-card-title
                        class="tw-text-2xl tw-font-extrabold tw-flex tw-flex-row tw-items-center tw-justify-center tw-space-y-5 tw-py-10">
                        ความคาดเคลี่ยนกำลังสอง (MAD)
                        ค่าเฉลี่ยสัมบูรณ์ของส่วนเบี่ยงเบน (MAD)
                    </v-card-title>

                    <v-card-text class="tw-text-2xl tw-font-bold tw-flex tw-items-center tw-justify-center tw-space-y-5 ">
                        <v-responsive class="mx-auto" max-width="250">
                            <v-text-field clearable hide-details="auto" label="ยอดขายรวมทุกสัปดาห์"
                                v-model="mad"></v-text-field>
                        </v-responsive>
                    </v-card-text>
                </div>

                <div>
                    <v-card-title
                        class="tw-text-2xl tw-font-extrabold tw-flex tw-flex-row tw-items-center tw-justify-center tw-space-y-5 tw-py-10 tw-text-wrap tw-text-center">
                        Economic Order Quantity : EOQ (ขวด)
                    </v-card-title>

                    <v-card-text class="tw-text-2xl tw-font-bold tw-flex tw-items-center tw-justify-center tw-space-y-5 ">
                        <v-responsive class="mx-auto" max-width="250">
                            <v-text-field clearable hide-details="auto" label="ยอดขายรวมทุกสัปดาห์"
                                v-model="EOQ"></v-text-field>
                        </v-responsive>
                    </v-card-text>
                </div>
            </div> -->

            <div class="tw-flex tw-flex-row tw-justify-center tw-gap-x-40 tw-items-center">
                <div class="tw-pl-6">
                    <v-card-title
                        class="tw-text-2xl tw-font-extrabold tw-flex tw-flex-row tw-items-center tw-justify-center tw-space-y-5 tw-py-10">
                        ค่าเฉลี่ยยอดขายต่อสัปดาห์
                    </v-card-title>

                    <v-card-text class="tw-text-2xl tw-font-bold tw-flex tw-items-center tw-justify-center tw-space-y-5 ">
                        <v-responsive class="mx-auto" max-width="250">
                            <v-text-field clearable hide-details="auto" label="ยอดขายรวมทุกสัปดาห์"
                                v-model="meanY"></v-text-field>
                        </v-responsive>
                    </v-card-text>
                </div>

                <div class="tw-pl-7">
                    <!-- <v-card-title
                        class="tw-text-2xl tw-font-extrabold tw-flex tw-flex-row tw-items-center tw-justify-center tw-space-y-5 tw-py-10">
                        ความคาดเคลี่ยนกำลังสอง (MAD)
                        ค่าเฉลี่ยสัมบูรณ์ของส่วนเบี่ยงเบน (MAD)
                    </v-card-title>

                    <v-card-text class="tw-text-2xl tw-font-bold tw-flex tw-items-center tw-justify-center tw-space-y-5 ">
                        <v-responsive class="mx-auto" max-width="250">
                            <v-text-field clearable hide-details="auto" label="ยอดขายรวมทุกสัปดาห์"
                                v-model="mad"></v-text-field>
                        </v-responsive>
                    </v-card-text> -->

                    <v-card-title
                        class="tw-text-2xl tw-font-extrabold tw-flex tw-flex-row tw-items-center tw-justify-center tw-space-y-5 tw-py-10">
                        ยอดขายรวมต่อปี
                    </v-card-title>

                    <v-card-text class="tw-text-2xl tw-font-bold tw-flex tw-items-center tw-justify-center tw-space-y-5 ">
                        <v-responsive class="mx-auto" max-width="250">
                            <v-text-field clearable hide-details="auto" label="ยอดขายรวมทุกสัปดาห์"
                                v-model="sumY"></v-text-field>
                        </v-responsive>
                    </v-card-text>
                </div>
            </div>

            <!-- <div class="tw-col-span-2">
                <v-card-title
                    class="tw-text-2xl tw-font-extrabold tw-flex tw-flex-row tw-items-center tw-justify-center tw-space-y-5 tw-py-10">
                    ความคลาดเคลื่อนกำลังสองเฉลี่ย (MSE)
                </v-card-title>

                <v-card-text class="tw-text-2xl tw-font-bold tw-flex tw-items-center tw-justify-center tw-space-y-5 ">
                    <v-responsive class="mx-auto" max-width="270">
                        <v-text-field clearable hide-details="auto" label="ความคลาดเคลื่อนกำลังสองเฉลี่ย"></v-text-field>
                    </v-responsive>
                </v-card-text>
            </div> -->

        <!-- </div> -->

    </v-card>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, defineProps } from "vue";

interface Card {
    week: number,
    value: number
}

const props = defineProps<{
    name: string,
    price: number,
    formular: string,
    image: string,
    number: Array<number>,
    co: number,
    cc: number,
    l: number,
    ss: number
}>()

const path = "~"

const numbers = [
    317, 561, 905, 732, 620, 753, 774, 717, 890, 831, 839, 978, 802, 1011, 822, 649,
    910, 773, 704, 802, 926, 1050, 968, 1098, 920, 986, 1025, 989, 787, 982, 710, 608,
    818, 832, 903, 1031, 807, 668, 791, 894, 851, 660, 56, 652, 781, 673, 695, 1219, 1207,
    968, 1255, 1198
]

const inputList = ref(Array<Card>());
const arrayY = ref(Array<number>());
const sumY = ref(0);
const meanY = ref(0);
const meanPerDay = 1;
const buyPerDay = 7;
const orderPerYear = Number((7 / 365).toFixed(3));
const levelOfService = 1.96;
const squareRootSale = Number(Math.sqrt(orderPerYear + meanPerDay).toFixed(2));
const standardDeviation = ref(0);
const safetyStock = ref(0);
const sumPower = ref(0);
const sumXY = ref(0);
const sumX = ref(0);
const meanX = ref(0);
const b1 = ref(0);
const b0 = ref(0);
const predict = ref(Array<number>());
const sumPredict = ref(0);
const error = ref(Array<number>());
const sumError = ref(0);
const absError = ref(Array<number>());
const sumAbsError = ref(0);
const errorPower = ref(Array<number>());
const sumErrorPower = ref(0);
const msd = ref(0);
const mad = ref(0);
const predictNextYear = ref(0);
const orderPerBottle = ref(Array<number>());
const sumOrderPerBottle = ref(0);
const predictOrderPerBottle = ref(0);
const EOQ = ref(0);
const ROP = ref(0);

onBeforeMount(() => {
    let dataSingha = null;
    let dataChang = null;

    if(process.client){
        dataSingha = localStorage.getItem('storedDataSingha');
        dataChang = localStorage.getItem('storedDataChang');
    }

    if(dataSingha !== null && props.name === "SINGHA"){
        inputList.value = JSON.parse(dataSingha);
    }else if( dataChang !== null && props.name === "CHANG"){
        inputList.value = JSON.parse(dataChang);
    }else{
        for (let i = 0; i < 2; i++) {
            const data = {
                week: i + 1,
                // value: props.number[i]
                value: 0
            }
            inputList.value.push(data);
        }
    }

    // for (let i = 0; i < 52; i++) {
    //     const data = {
    //         week: i + 1,
    //         value: 0
    //     }
    //     inputList.value.push(data);
    // }
})

onMounted(() => {
    updateChart();
    console.log("squareRootSale", squareRootSale);
});

function calSumY() {
    sumY.value = 0;
    sumY.value = inputList.value.reduce(function (accumulator, currentValue) {
        return Number(accumulator) + Number(currentValue.value); // Access the 'value' property
    }, 0);
    console.log("Sum: ", sumY.value);
}

function calMeanY() {
    meanY.value = 0;
    meanY.value = Number((sumY.value / inputList.value.length).toFixed(2));
    console.log("Mean: ", meanY.value);
}

function getStandardDeviation() {
    arrayY.value = [];
    inputList.value.forEach((item: any) => {
        arrayY.value.push(item.value)
    })

    const n = arrayY.value.length
    const mean = meanY.value
    standardDeviation.value = 0;
    standardDeviation.value = Number(Math.sqrt(arrayY.value.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n).toFixed(2));
    console.log("Standard Deviation: ", standardDeviation.value);
}

// function calSafyStock() {
//     safetyStock.value = 0;
//     safetyStock.value = Number((levelOfService * (standardDeviation.value * squareRootSale)).toFixed(2));
//     console.log("Safety Stock: ", safetyStock.value);
// }

function calSumPower() {
    sumPower.value = 0;
    inputList.value.forEach((item: any, index) => {
        sumPower.value += Math.pow(index + 1, 2);
    })
    console.log("Sum Power: ", sumPower.value);
}

function calSumXY() {
    sumXY.value = 0;
    inputList.value.forEach((item: any, index) => {
        sumXY.value += (index + 1) * item.value;
    })
    console.log("Sum XY: ", sumXY.value);
}

function calSumX() {
    sumX.value = 0;
    inputList.value.forEach((item: any, index) => {
        sumX.value += index + 1;
    })
    console.log("Sum X: ", sumX.value);
}

function calMeanX() {
    meanX.value = 0;
    meanX.value = sumX.value / inputList.value.length;
    console.log("Mean X: ", meanX);
}


function calB1() {
    let b1_1 = 0;
    let b1_2 = 0;

    b1_1 = sumXY.value - (inputList.value.length * meanX.value * meanY.value);
    b1_2 = sumPower.value - (inputList.value.length * Math.pow(meanX.value, 2));

    console.log("B1_1: ", b1_1);
    console.log("B1_2: ", b1_2);

    b1.value = 0;
    b1.value = b1_1 / b1_2;
    console.log("B1: ", b1.value);
}

function calB0() {
    b0.value = 0;
    b0.value = meanY.value - (b1.value * meanX.value);
    console.log("B0: ", b0.value);
}

function calPredict() {
    predict.value = [];
    sumPredict.value = 0;
    predictNextYear.value = 0;
    inputList.value.forEach((item: any, index) => {
        predict.value.push(Number((b0.value + (b1.value * (index + 1))).toFixed(2)));
        sumPredict.value += (b0.value + (b1.value * (index + 1)));
    })

    predict.value.push(Number((b0.value + (b1.value * 53)).toFixed(2)));
    predictNextYear.value = Number((b0.value + (b1.value * 53)).toFixed(2));

    console.log("Predict: ", predict.value);
    console.log("Sum Predict: ", sumPredict.value);
}

function calError() {
    error.value = [];
    sumError.value = 0;
    inputList.value.forEach((item: any, index) => {
        error.value.push(item.value - predict.value[index]);
        sumError.value += item.value - predict.value[index];
    })
    console.log("Error: ", error.value);
    console.log("Sum Error: ", sumError.value);

}

function calAbsError() {
    absError.value = [];
    sumAbsError.value = 0;
    error.value.forEach((item: any) => {
        absError.value.push(Math.abs(item));
        sumAbsError.value += Math.abs(item);
    })
    console.log("Absolute Error: ", absError.value);
    console.log("Sum Absolute Error: ", sumAbsError.value);
}

function calErrorPower() {
    errorPower.value = [];
    sumErrorPower.value = 0;
    error.value.forEach((item: any) => {
        errorPower.value.push(Math.pow(item, 2));
        sumErrorPower.value += Math.pow(item, 2);
    })
    console.log("Error Power: ", errorPower.value);
    console.log("Sum Error Power: ", sumErrorPower.value);
}

// function calMSD() {
//     msd.value = 0;
//     msd.value = Number((sumErrorPower.value / inputList.value.length).toFixed(3));
//     console.log("MSE: ", msd.value);
// }

function calMAD() {
    mad.value = 0;
    mad.value = Number((sumAbsError.value / inputList.value.length).toFixed(3));
    console.log("MAD: ", mad.value);
}

function calOrderPerbottle() {
    predict.value.forEach((item: any) => {
        orderPerBottle.value.push(item + safetyStock.value);
        sumOrderPerBottle.value += item + safetyStock.value;
    })

    predictOrderPerBottle.value = Number((orderPerBottle.value[orderPerBottle.value.length - 1]).toFixed(2));

    console.log("Order Per Buttom: ", orderPerBottle.value);
    console.log("Sum Order Per Buttom: ", sumOrderPerBottle.value);

}

function calEOQ() {
    EOQ.value = 0;
    EOQ.value = Math.round(Number((Math.sqrt((2 * props.co * sumY.value) / props.cc)).toFixed(2)));
    console.log("ROP: ", ROP.value);


}

function calROP() {
    ROP.value = 0;
    ROP.value = Math.round(Number(((meanY.value * props.l) + props.ss).toFixed(2)));
    console.log("EOQ: ", EOQ.value);
}

function saveData(){
    if(props.name === "SIGNHA"){
        localStorage.setItem('storedDataSigha', JSON.stringify(inputList.value));
    }else if(props.name === "CHANG"){
        localStorage.setItem('storedDataChang', JSON.stringify(inputList.value));
    }
}

// function calculateStandardDeviation(numbers: Array<number>) {
//     // Calculate the mean (average) of the numbers
//     const mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

//     // Calculate the squared differences from the mean
//     const squaredDifferences = numbers.map(num => Math.pow(num - mean, 2));

//     // Calculate the variance
//     const variance = squaredDifferences.reduce((sum, squaredDiff) => sum + squaredDiff, 0) / numbers.length;

//     // Calculate the standard deviation
//     const standardDeviation = Math.sqrt(variance);

//     return standardDeviation;
// }


// const numbers = [
//     317, 561, 905, 732, 620, 753, 774, 717, 890, 831, 839, 978, 802, 1011, 822, 649,
//     910, 773, 704, 802, 926, 1050, 968, 1098, 920, 986, 1025, 989, 787, 982, 710, 608,
//     818, 832, 903, 1031, 807, 668, 791, 894, 851, 660, 56, 652, 781, 673, 695, 1219, 1207,
//     968, 1255, 1198
// ];

// const stdev = calculateStandardDeviation(numbers);
// console.log("Standard Deviation:", stdev);

// function calSafyStock() {
//     const data = inputList.value
//     const dataList = data.map((item: any) => item.value)
//     const sum = dataList.reduce((a: any, b: any) => a + b, 0);
//     return sum / 52;
// }

function addInput() {
    const data = {
        week: inputList.value.length + 1,
        value: 0
    }
    if (inputList.value.length >= 52) {
        inputList.value.shift();
        inputList.value.push(data);
    } else {
        inputList.value.push(data);

    }
}

function deleteInput() {
    inputList.value.shift();
}

const options = ref({
    chart: {
        type: "line",
    },
    colors: ['#4472C4', '#ED7D31'],
    plotOptions: {
        bar: {
            borderRadius: 10,
            borderRadiusApplication: "around",
        },
    },
    dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2
    },
    toolbar: {
        show: false
    },
    // dataLabels: {
    //     enabled: true,
    // },
    // stroke: {
    //   curve: 'smooth'
    // },
    // title: {
    //     text: 'Average High & Low Temperature',
    //     align: 'left'
    // },
});

const series = ref([
    {
        name: "Actual",
        data: [],
    },
    {
        name: "Target",
        data: [],
    },
]);

const updateChart = () => {

    const data: any = inputList.value
    const data2: any = predict.value


    const actual = data.map((item: any) => item.value)
    const target = data2.map((item: any) => item)

    series.value = [
        {
            name: "Actual",
            data: actual,
        },
        {
            name: "Target",
            data: target,
        },
    ];
};


</script>

<style scoped></style>