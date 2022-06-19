class Slider {
  constructor(rangeElement, options) {
    this.rangeElement = rangeElement;
    this.options = options;

    // Attach a listener to "change" event
    this.rangeElement.addEventListener('input', this.updateSlider.bind(this));
  }

  reinit(options) {
    this.options = options;
    this.init();
  }

  // Initialize the slider
  init() {
    this.rangeElement.setAttribute('min', this.options.min);
    this.rangeElement.setAttribute('max', this.options.max);
    this.rangeElement.value = this.options.cur;

    this.updateSlider();
  }

  generateBackground(rangeElement) {
    if (this.rangeElement.value === this.options.min) {
      return;
    }

    let percentage =
      ((this.rangeElement.value - this.options.min) /
        (this.options.max - this.options.min)) *
      100;
    return (
      'background: linear-gradient(to right, #50299c, #7a00ff ' +
      percentage +
      '%, #d3edff ' +
      percentage +
      '%, #dee1e2 100%)'
    );
  }

  updateSlider(newValue) {
    this.rangeElement.style = this.generateBackground(this.rangeElement.value);
  }
}

const MOCK_TEETH = [
  { id: 1, tooth: 11, status: 0, description: 'lorem', date: '2022-02-01' },
  { id: 2, tooth: 21, status: 1, description: 'ipsum', date: '2022-02-01' },
  { id: 3, tooth: 28, status: 1, description: 'lorem', date: '2022-02-01' },
  { id: 4, tooth: 18, status: 1, description: 'ipsum', date: '2022-02-01' },
  { id: 5, tooth: 48, status: 1, description: 'lorem', date: '2022-02-01' },
  { id: 6, tooth: 38, status: 0, description: 'ipsum', date: '2022-02-01' },
  { id: 7, tooth: 16, status: 0, description: 'lorem', date: '2022-02-01' },
  { id: 8, tooth: 46, status: 0, description: 'ipsum', date: '2022-02-01' },
  { id: 9, tooth: 41, status: 0, description: 'lorem', date: '2022-02-01' },
  { id: 10, tooth: 42, status: 0, description: 'ipsum', date: '2022-02-01' },
  { id: 11, tooth: 43, status: 0, description: 'lorem', date: '2022-02-01' },
  { id: 12, tooth: 44, status: 0, description: 'ipsum', date: '2022-02-01' },
  { id: 13, tooth: 45, status: 1, description: 'lorem', date: '2022-02-01' },
  { id: 14, tooth: 31, status: 0, description: 'ipsum', date: '2022-02-01' },
  { id: 15, tooth: 32, status: 0, description: 'lorem', date: '2022-02-01' },
  { id: 16, tooth: 33, status: 0, description: 'ipsum', date: '2022-02-01' },
  { id: 17, tooth: 34, status: 0, description: 'lorem', date: '2022-02-01' },
  { id: 18, tooth: 35, status: 0, description: 'ipsum', date: '2022-02-01' },
  { id: 19, tooth: 36, status: 0, description: 'lorem', date: '2022-02-01' },
  { id: 20, tooth: 23, status: 0, description: 'ipsum', date: '2022-02-01' },
  { id: 21, tooth: 11, status: 0, description: 'lorem', date: '2022-03-01' },
  { id: 22, tooth: 21, status: 1, description: 'ipsum', date: '2022-03-01' },
  { id: 23, tooth: 28, status: 1, description: 'lorem', date: '2022-03-01' },
  { id: 24, tooth: 18, status: 1, description: 'ipsum', date: '2022-03-01' },
  { id: 25, tooth: 48, status: 1, description: 'lorem', date: '2022-03-01' },
  { id: 26, tooth: 38, status: 1, description: 'ipsum', date: '2022-03-01' },
  { id: 27, tooth: 16, status: 0, description: 'lorem', date: '2022-03-01' },
  { id: 28, tooth: 46, status: 0, description: 'ipsum', date: '2022-03-01' },
  { id: 29, tooth: 41, status: 0, description: 'lorem', date: '2022-03-01' },
  { id: 30, tooth: 42, status: 0, description: 'ipsum', date: '2022-03-01' },
  { id: 31, tooth: 43, status: 0, description: 'lorem', date: '2022-03-01' },
  { id: 32, tooth: 44, status: 0, description: 'ipsum', date: '2022-03-01' },
  { id: 33, tooth: 45, status: 1, description: 'lorem', date: '2022-03-01' },
  { id: 34, tooth: 31, status: 0, description: 'ipsum', date: '2022-03-01' },
  { id: 35, tooth: 32, status: 1, description: 'lorem', date: '2022-03-01' },
  { id: 36, tooth: 33, status: 0, description: 'ipsum', date: '2022-03-01' },
  { id: 37, tooth: 34, status: 0, description: 'lorem', date: '2022-03-01' },
  { id: 38, tooth: 35, status: 0, description: 'ipsum', date: '2022-03-01' },
  { id: 39, tooth: 36, status: 0, description: 'lorem', date: '2022-03-01' },
  { id: 40, tooth: 23, status: 0, description: 'ipsum', date: '2022-03-01' },
  { id: 41, tooth: 11, status: 0, description: 'lorem', date: '2022-04-01' },
  { id: 42, tooth: 21, status: 1, description: 'ipsum', date: '2022-04-01' },
  { id: 43, tooth: 28, status: 1, description: 'lorem', date: '2022-04-01' },
  { id: 44, tooth: 18, status: 1, description: 'ipsum', date: '2022-04-01' },
  { id: 45, tooth: 48, status: 1, description: 'lorem', date: '2022-04-01' },
  { id: 46, tooth: 38, status: 0, description: 'ipsum', date: '2022-04-01' },
  { id: 47, tooth: 16, status: 0, description: 'lorem', date: '2022-04-01' },
  { id: 48, tooth: 46, status: 0, description: 'ipsum', date: '2022-04-01' },
  { id: 49, tooth: 41, status: 1, description: 'lorem', date: '2022-04-01' },
  { id: 50, tooth: 42, status: 0, description: 'ipsum', date: '2022-04-01' },
  { id: 51, tooth: 43, status: 0, description: 'lorem', date: '2022-04-01' },
  { id: 52, tooth: 44, status: 0, description: 'ipsum', date: '2022-04-01' },
  { id: 53, tooth: 45, status: 1, description: 'lorem', date: '2022-04-01' },
  { id: 54, tooth: 31, status: 0, description: 'ipsum', date: '2022-04-01' },
  { id: 55, tooth: 32, status: 0, description: 'lorem', date: '2022-04-01' },
  { id: 56, tooth: 33, status: 0, description: 'ipsum', date: '2022-04-01' },
  { id: 57, tooth: 34, status: 0, description: 'lorem', date: '2022-04-01' },
  { id: 58, tooth: 35, status: 0, description: 'ipsum', date: '2022-04-01' },
  { id: 59, tooth: 36, status: 0, description: 'lorem', date: '2022-04-01' },
  { id: 60, tooth: 23, status: 0, description: 'ipsum', date: '2022-04-01' },
];

////////////////////////////////////////////////////////////////////////////
//////////////////////////// GET REQUEST ///////////////////////////////////
////////////////////////////////////////////////////////////////////////////
export const get = async (api, hasAuth = true, isJSON = true) => {
  const method = 'GET';
  const headers = {};
  if (hasAuth) {
    const jwtToken = localStorage.getItem('accessToken');
    headers['Authorization'] = jwtToken;
  }

  return fetch(api, { method, headers }).then((res) => res.json());
};

////////////////////////////////////////////////////////////////////////////
//////////////////////// POST REQUEST /////////////////////////////////
////////////////////////////////////////////////////////////////////////////

export const post = async (api, data, hasAuth = true, isJSON = true) => {
  const method = 'POST';
  const headers = {};
  if (hasAuth) {
    const jwtToken = localStorage.getItem('accessToken');
    headers['Authorization'] = jwtToken;
  }
  let body;
  if (isJSON) {
    headers['Content-Type'] = 'application/json';
    body = JSON.stringify(data);
  } else {
    body = data;
  }

  return fetch(api, { method, body, headers }).then((res) => res.json());
};

export const resHandler = (resolve, reject, res) => {
  if (res?.status) {
    return resolve(res.data || true);
  } else {
    return reject(res?.error?.message || res?.error || 'unknown_error');
  }
};
export const errorHandler = (reject, err) => {
  reject(err?.message || err || 'unknown_error');
};

const API_BASE_URL = 'http://3.131.1.207:8080/';
const ENDPOINTS = {
  LOAD: 'getTeethSet',
};

class TeethService {
  load = () =>
    new Promise((resolve, reject) => {
      get(API_BASE_URL + ENDPOINTS.LOAD, false, true)
        .then((res) => {
          resHandler(resolve, reject, res);
        })
        .catch((err) => {
          errorHandler(reject, err);
        });
    });
}

const teethService = new TeethService();

class TeethLoader {
  constructor(rootDom) {
    this.teeth = [
      {
        label: 'Top Left',
        teeth: [18, 17, 16, 15, 14, 13, 12, 11],
      },
      {
        label: 'Top Right',
        teeth: [21, 22, 23, 24, 25, 26, 27, 28],
      },
      {
        label: 'Bottom Left',
        teeth: [48, 47, 46, 45, 44, 43, 42, 41],
      },
      {
        label: 'Bottom Right',
        teeth: [31, 32, 33, 34, 35, 36, 37, 38],
      },
    ];

    this.data = {};
    this.dates = [];
    this.date = '';
    this.dateIndex = 1;
    this.selectedData = {};

    this.teethDOM = rootDom;
    this.initUI();
  }

  loadTeeth() {
    // this.initLoader();

    teethService
      .load()
      .then((data) => {
        console.log('data', data);
      })
      .catch((err) => {
        console.error('err', err);
        this.initData(MOCK_TEETH);
      });
  }

  initUI() {
    const html = `
      <div class="teeth-controls">
        <div class="range">
          <div class="form-group range__slider">
            <input type="range" step="1" />
          </div>
          <!--/form-group-->
          <div class="form-group range__value"></div>
        </div>
        <div class="">
          <button class="print-btn">Print as PDF</button>
        </div>
      </div>
      <div class="teeth-container">
        <hr class="split-vertical" />
        <hr class="split-horizontal" />
        <div class="teeth"></div>
      </div>
    `;
    this.teethDOM.innerHTML = html;
    let rangeElement = this.teethDOM.querySelector(
      '.teeth-controls .range [type="range"]'
    );
    this.teethDOM.querySelector('.print-btn').addEventListener('click', () => {
      window.print();
    });

    let options = {
      min: 1,
      max: 2,
      cur: 1,
    };

    if (rangeElement) {
      this.slider = new Slider(rangeElement, options);

      this.slider.init();

      this.slider.rangeElement.addEventListener(
        'input',
        this.onChangeDate.bind(this)
      );
    }
  }

  initData(input) {
    const output = {};
    input.forEach((e) => {
      const date = e.date;
      const tooth = e.tooth;
      if (output[date]) {
        output[date][tooth] = e;
      } else {
        output[date] = { tooth: e };
      }
    });
    this.data = output;

    const dates = Object.keys(this.data);
    this.dates = dates;
    this.changeDate(this.dates[0]);

    if (this.slider) {
      this.teethDOM.querySelector('.range__value').innerHTML = this.dates[0];
      this.slider.reinit({
        min: 1,
        max: dates.length,
        cur: 1,
      });
    }
  }

  generateTeethHTML() {
    let innerHTML = '';
    this.teeth.forEach((part) => {
      let partHTML = ``;
      part.teeth.forEach((tooth) => {
        const status = this.selectedData?.[tooth]?.status;
        const toothHTML = `
          <div class="tooth">
            <div class="${status ? 'selected' : ''} tooth-icons">
              <div class="">
                <img src="assets/img/root_${tooth}.jpg" alt="" />
                <img src="" alt="" />
              </div>
              <div class="">
                <img src="assets/img/t_${tooth}.jpg" alt="" />
                <img src="" alt="" />
              </div>
            </div>
            <label>${tooth}</label>
          </div>
        `;
        partHTML += toothHTML;
      });
      const partContainerHTML = `
        <div class="teeth-part">
          <label>${part.label}</label>
          <div class="teeth-part-content">
            ${partHTML}
          </div>
        </div>
      `;
      innerHTML += partContainerHTML;
    });
    this.teethDOM.querySelector('.teeth').innerHTML = innerHTML;
  }

  changeDate(date) {
    console.log('changed date', date);
    this.date = date;
    this.selectedData = this.data[date];
    this.generateTeethHTML();
  }

  onChangeDate() {
    const v = this.slider.rangeElement.value;
    const date = this.dates[v - 1];

    this.teethDOM.querySelector('.range__value').innerHTML = date;

    this.changeDate(date);
  }
}

const teethLoader = new TeethLoader(document.querySelector('#teeth-container'));
teethLoader.generateTeethHTML();
teethLoader.loadTeeth();
