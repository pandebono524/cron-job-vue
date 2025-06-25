import DFeatureImg from '../assets/images/DFeature.png';
import RFeatureImg from '../assets/images/RFeature.png';
import XFeatureImg from '../assets/images/XFeature.png';

export const getFeatureImg = (feature) => {
    const featureMap = {
        'D': DFeatureImg,
        'R': RFeatureImg,
        'X': XFeatureImg
    };
    return featureMap[feature] || '';
};

export const getStatusClass = (type) => {
    const statusClassMap = {
        'stopped': 'bg-[#F80707] text-white',
        'completed': 'bg-[#0BA40B] text-white',
        'pending': 'bg-[#FFD555] text-[#323232]',
        'undefined': 'bg-gray-200 text-gray-700'
    };
    return statusClassMap[type] || 'bg-gray-200 text-gray-700';
};

export const getLevelStyle = (level) => {
    const levelStyles = {
        1: 'background: linear-gradient(252.72deg, rgba(60, 203, 134, 0.25) 11.8%, rgba(60, 203, 134, 0.4) 115.79%); box-shadow: 10px 10px 20px 0px #0000000D; color: #009E10;',
        2: 'background: linear-gradient(252.72deg, rgba(255, 233, 161, 0.74) 11.8%, rgba(255, 233, 161, 0.83) 115.79%); box-shadow: 10px 10px 20px 0px #0000000D; color: #D6A70F;',
        3: 'background: linear-gradient(252.72deg, #FFCECB 11.8%, #FED1CE 115.79%); box-shadow: 10px 10px 20px 0px #0000000D; color: #F4564C;'
    };
    return levelStyles[level] || 'background: #f3f4f6; color: #374151; box-shadow: 10px 10px 20px 0px #0000000D;';
}; 