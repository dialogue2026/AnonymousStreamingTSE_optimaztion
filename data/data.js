const data_list = [
    {
        "mixed_speech": "demo/main/mix_clean/61-70968-0003_2830-3980-0008.wav",
        "ref_speech": "demo/main/ref/61-70968-0003_2830-3980-0008.wav",
        "laura_tse": "demo/main/lauratse/61-70968-0003_2830-3980-0008.wav",
        "star_tse": "demo/main/startse/61-70968-0003_2830-3980-0008.wav",
        "our_proposed": "demo/main/proposed_wavlmdpo/61-70968-0003_2830-3980-0008.wav",
        "ground_truth": "demo/main/gt/61-70968-0003_2830-3980-0008.wav",
        "note":"Proposed is clearer and more accurate than LauraTSE and StarTSE."
    },
    {
        "mixed_speech": "demo/main/mix_clean/61-70968-0011_4992-41806-0004.wav",
        "ref_speech": "demo/main/ref/61-70968-0011_4992-41806-0004.wav",
        "laura_tse": "demo/main/lauratse/61-70968-0011_4992-41806-0004.wav",
        "star_tse": "demo/main/startse/61-70968-0011_4992-41806-0004.wav",
        "our_proposed": "demo/main/proposed_wavlmdpo/61-70968-0011_4992-41806-0004.wav",
        "ground_truth": "demo/main/gt/61-70968-0011_4992-41806-0004.wav",
        "note":"Proposed is clearer and more accurate than LauraTSE and StarTSE."
    },
    {
        "mixed_speech": "demo/main/mix_clean/61-70968-0013_6829-68771-0028.wav",
        "ref_speech": "demo/main/ref/61-70968-0013_6829-68771-0028.wav",
        "laura_tse": "demo/main/lauratse/61-70968-0013_6829-68771-0028.wav",
        "star_tse": "demo/main/startse/61-70968-0013_6829-68771-0028.wav",
        "our_proposed": "demo/main/proposed_wavlmdpo/61-70968-0013_6829-68771-0028.wav",
        "ground_truth": "demo/main/gt/61-70968-0013_6829-68771-0028.wav",
        "note":"Proposed is clearer and more accurate than LauraTSE and StarTSE."
    },
]

const data_list_hcr = [

    {
        "mixed_speech": "demo/dpo/mix_clean/61-70968-0034_672-122797-0070.wav",
        "ref_speech": "demo/dpo/ref/61-70968-0034_672-122797-0070.wav",
        "star_tse_k15": "demo/dpo/startse_k15/61-70968-0034_672-122797-0070.wav",
        "DPO_dnsmos": "demo/dpo/startse_k15_dpo_dnsmos/61-70968-0034_672-122797-0070.wav",
        "dpo_wer": "demo/dpo/startse_k15_dpo_wer/61-70968-0034_672-122797-0070.wav",
        "dpo_wavlm": "demo/dpo/startse_k15_dpo_wavlm/61-70968-0034_672-122797-0070.wav",
        "ground_truth": "demo/dpo/gt/61-70968-0034_672-122797-0070.wav",
        "note":"Base General Case: Clearer and more accurate than base/dnsmos/wer."
    },
    {
        "mixed_speech": "demo/dpo/mix_clean/4992-23283-0015_8455-210777-0013.wav",
        "ref_speech": "demo/dpo/ref/4992-23283-0015_8455-210777-0013.wav",
        "star_tse_k15": "demo/dpo/startse_k15/4992-23283-0015_8455-210777-0013.wav",
        "DPO_dnsmos": "demo/dpo/startse_k15_dpo_dnsmos/4992-23283-0015_8455-210777-0013.wav",
        "dpo_wer": "demo/dpo/startse_k15_dpo_wer/4992-23283-0015_8455-210777-0013.wav",
        "dpo_wavlm": "demo/dpo/startse_k15_dpo_wavlm/4992-23283-0015_8455-210777-0013.wav",
        "ground_truth": "demo/dpo/gt/4992-23283-0015_8455-210777-0013.wav",
        "note":"Base Bad Case: Outperforms base and dnsmos in clarity; comparable to wer."
    },
    {
        "mixed_speech": "demo/dpo/mix_clean/4992-23283-0016_61-70968-0004.wav",
        "ref_speech": "demo/dpo/ref/4992-23283-0016_61-70968-0004.wav",
        "star_tse_k15": "demo/dpo/startse_k15/4992-23283-0016_61-70968-0004.wav",
        "DPO_dnsmos": "demo/dpo/startse_k15_dpo_dnsmos/4992-23283-0016_61-70968-0004.wav",
        "dpo_wer": "demo/dpo/startse_k15_dpo_wer/4992-23283-0016_61-70968-0004.wav",
        "dpo_wavlm": "demo/dpo/startse_k15_dpo_wavlm/4992-23283-0016_61-70968-0004.wav",
        "ground_truth": "demo/dpo/gt/4992-23283-0016_61-70968-0004.wav",
        "note":"Base Good Case: Maintains original performance without degradation."
    },
]
