"use strict";
// https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.DataAwsEc2InstanceType = void 0;
var cdktf = require("cdktf");
function dataAwsEc2InstanceTypeFpgasToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function dataAwsEc2InstanceTypeGpusToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function dataAwsEc2InstanceTypeInferenceAcceleratorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function dataAwsEc2InstanceTypeInstanceDisksToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html aws_ec2_instance_type}
*/
var DataAwsEc2InstanceType = /** @class */ (function (_super) {
    __extends(DataAwsEc2InstanceType, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html aws_ec2_instance_type} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2InstanceTypeConfig
    */
    function DataAwsEc2InstanceType(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_instance_type',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._defaultCores = config.defaultCores;
        _this._defaultThreadsPerCore = config.defaultThreadsPerCore;
        _this._hypervisor = config.hypervisor;
        _this._instanceType = config.instanceType;
        _this._maximumIpv6AddressesPerInterface = config.maximumIpv6AddressesPerInterface;
        _this._totalFpgaMemory = config.totalFpgaMemory;
        _this._totalGpuMemory = config.totalGpuMemory;
        _this._totalInstanceStorage = config.totalInstanceStorage;
        _this._fpgas = config.fpgas;
        _this._gpus = config.gpus;
        _this._inferenceAccelerators = config.inferenceAccelerators;
        _this._instanceDisks = config.instanceDisks;
        return _this;
    }
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "autoRecoverySupported", {
        // ==========
        // ATTRIBUTES
        // ==========
        // auto_recovery_supported - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('auto_recovery_supported');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "bareMetal", {
        // bare_metal - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('bare_metal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "burstablePerformanceSupported", {
        // burstable_performance_supported - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('burstable_performance_supported');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "currentGeneration", {
        // current_generation - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('current_generation');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "dedicatedHostsSupported", {
        // dedicated_hosts_supported - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('dedicated_hosts_supported');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "defaultCores", {
        get: function () {
            return this.getNumberAttribute('default_cores');
        },
        set: function (value) {
            this._defaultCores = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2InstanceType.prototype.resetDefaultCores = function () {
        this._defaultCores = undefined;
    };
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "defaultCoresInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultCores;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "defaultThreadsPerCore", {
        get: function () {
            return this.getNumberAttribute('default_threads_per_core');
        },
        set: function (value) {
            this._defaultThreadsPerCore = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2InstanceType.prototype.resetDefaultThreadsPerCore = function () {
        this._defaultThreadsPerCore = undefined;
    };
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "defaultThreadsPerCoreInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultThreadsPerCore;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "defaultVcpus", {
        // default_vcpus - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('default_vcpus');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "ebsEncryptionSupport", {
        // ebs_encryption_support - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ebs_encryption_support');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "ebsNvmeSupport", {
        // ebs_nvme_support - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ebs_nvme_support');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "ebsOptimizedSupport", {
        // ebs_optimized_support - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ebs_optimized_support');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "ebsPerformanceBaselineBandwidth", {
        // ebs_performance_baseline_bandwidth - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ebs_performance_baseline_bandwidth');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "ebsPerformanceBaselineIops", {
        // ebs_performance_baseline_iops - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ebs_performance_baseline_iops');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "ebsPerformanceBaselineThroughput", {
        // ebs_performance_baseline_throughput - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ebs_performance_baseline_throughput');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "ebsPerformanceMaximumBandwidth", {
        // ebs_performance_maximum_bandwidth - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ebs_performance_maximum_bandwidth');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "ebsPerformanceMaximumIops", {
        // ebs_performance_maximum_iops - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ebs_performance_maximum_iops');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "ebsPerformanceMaximumThroughput", {
        // ebs_performance_maximum_throughput - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ebs_performance_maximum_throughput');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "efaSupported", {
        // efa_supported - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('efa_supported');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "enaSupport", {
        // ena_support - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ena_support');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "freeTierEligible", {
        // free_tier_eligible - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('free_tier_eligible');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "hibernationSupported", {
        // hibernation_supported - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('hibernation_supported');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "hypervisor", {
        get: function () {
            return this.getStringAttribute('hypervisor');
        },
        set: function (value) {
            this._hypervisor = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2InstanceType.prototype.resetHypervisor = function () {
        this._hypervisor = undefined;
    };
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "hypervisorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hypervisor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "instanceStorageSupported", {
        // instance_storage_supported - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('instance_storage_supported');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "instanceType", {
        get: function () {
            return this.getStringAttribute('instance_type');
        },
        set: function (value) {
            this._instanceType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "instanceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "ipv6Supported", {
        // ipv6_supported - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ipv6_supported');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "maximumIpv4AddressesPerInterface", {
        // maximum_ipv4_addresses_per_interface - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('maximum_ipv4_addresses_per_interface');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "maximumIpv6AddressesPerInterface", {
        get: function () {
            return this.getNumberAttribute('maximum_ipv6_addresses_per_interface');
        },
        set: function (value) {
            this._maximumIpv6AddressesPerInterface = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2InstanceType.prototype.resetMaximumIpv6AddressesPerInterface = function () {
        this._maximumIpv6AddressesPerInterface = undefined;
    };
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "maximumIpv6AddressesPerInterfaceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maximumIpv6AddressesPerInterface;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "maximumNetworkInterfaces", {
        // maximum_network_interfaces - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('maximum_network_interfaces');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "memorySize", {
        // memory_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('memory_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "networkPerformance", {
        // network_performance - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network_performance');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "supportedArchitectures", {
        // supported_architectures - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('supported_architectures');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "supportedPlacementStrategies", {
        // supported_placement_strategies - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('supported_placement_strategies');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "supportedRootDeviceTypes", {
        // supported_root_device_types - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('supported_root_device_types');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "supportedUsagesClasses", {
        // supported_usages_classes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('supported_usages_classes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "supportedVirtualizationTypes", {
        // supported_virtualization_types - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('supported_virtualization_types');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "sustainedClockSpeed", {
        // sustained_clock_speed - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('sustained_clock_speed');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "totalFpgaMemory", {
        get: function () {
            return this.getNumberAttribute('total_fpga_memory');
        },
        set: function (value) {
            this._totalFpgaMemory = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2InstanceType.prototype.resetTotalFpgaMemory = function () {
        this._totalFpgaMemory = undefined;
    };
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "totalFpgaMemoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._totalFpgaMemory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "totalGpuMemory", {
        get: function () {
            return this.getNumberAttribute('total_gpu_memory');
        },
        set: function (value) {
            this._totalGpuMemory = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2InstanceType.prototype.resetTotalGpuMemory = function () {
        this._totalGpuMemory = undefined;
    };
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "totalGpuMemoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._totalGpuMemory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "totalInstanceStorage", {
        get: function () {
            return this.getNumberAttribute('total_instance_storage');
        },
        set: function (value) {
            this._totalInstanceStorage = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2InstanceType.prototype.resetTotalInstanceStorage = function () {
        this._totalInstanceStorage = undefined;
    };
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "totalInstanceStorageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._totalInstanceStorage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "validCores", {
        // valid_cores - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('valid_cores');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "validThreadsPerCore", {
        // valid_threads_per_core - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('valid_threads_per_core');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "fpgas", {
        get: function () {
            return this.interpolationForAttribute('fpgas');
        },
        set: function (value) {
            this._fpgas = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2InstanceType.prototype.resetFpgas = function () {
        this._fpgas = undefined;
    };
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "fpgasInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fpgas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "gpus", {
        get: function () {
            return this.interpolationForAttribute('gpus');
        },
        set: function (value) {
            this._gpus = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2InstanceType.prototype.resetGpus = function () {
        this._gpus = undefined;
    };
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "gpusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gpus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "inferenceAccelerators", {
        get: function () {
            return this.interpolationForAttribute('inference_accelerators');
        },
        set: function (value) {
            this._inferenceAccelerators = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2InstanceType.prototype.resetInferenceAccelerators = function () {
        this._inferenceAccelerators = undefined;
    };
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "inferenceAcceleratorsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._inferenceAccelerators;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "instanceDisks", {
        get: function () {
            return this.interpolationForAttribute('instance_disks');
        },
        set: function (value) {
            this._instanceDisks = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2InstanceType.prototype.resetInstanceDisks = function () {
        this._instanceDisks = undefined;
    };
    Object.defineProperty(DataAwsEc2InstanceType.prototype, "instanceDisksInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceDisks;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsEc2InstanceType.prototype.synthesizeAttributes = function () {
        return {
            default_cores: cdktf.numberToTerraform(this._defaultCores),
            default_threads_per_core: cdktf.numberToTerraform(this._defaultThreadsPerCore),
            hypervisor: cdktf.stringToTerraform(this._hypervisor),
            instance_type: cdktf.stringToTerraform(this._instanceType),
            maximum_ipv6_addresses_per_interface: cdktf.numberToTerraform(this._maximumIpv6AddressesPerInterface),
            total_fpga_memory: cdktf.numberToTerraform(this._totalFpgaMemory),
            total_gpu_memory: cdktf.numberToTerraform(this._totalGpuMemory),
            total_instance_storage: cdktf.numberToTerraform(this._totalInstanceStorage),
            fpgas: cdktf.listMapper(dataAwsEc2InstanceTypeFpgasToTerraform)(this._fpgas),
            gpus: cdktf.listMapper(dataAwsEc2InstanceTypeGpusToTerraform)(this._gpus),
            inference_accelerators: cdktf.listMapper(dataAwsEc2InstanceTypeInferenceAcceleratorsToTerraform)(this._inferenceAccelerators),
            instance_disks: cdktf.listMapper(dataAwsEc2InstanceTypeInstanceDisksToTerraform)(this._instanceDisks)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsEc2InstanceType.tfResourceType = "aws_ec2_instance_type";
    return DataAwsEc2InstanceType;
}(cdktf.TerraformDataSource));
exports.DataAwsEc2InstanceType = DataAwsEc2InstanceType;
