"use strict";
// https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_application.html
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
exports.DataAwsElasticBeanstalkApplication = exports.DataAwsElasticBeanstalkApplicationAppversionLifecycle = void 0;
var cdktf = require("cdktf");
var DataAwsElasticBeanstalkApplicationAppversionLifecycle = /** @class */ (function (_super) {
    __extends(DataAwsElasticBeanstalkApplicationAppversionLifecycle, _super);
    function DataAwsElasticBeanstalkApplicationAppversionLifecycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsElasticBeanstalkApplicationAppversionLifecycle.prototype, "deleteSourceFromS3", {
        // delete_source_from_s3 - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('delete_source_from_s3');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticBeanstalkApplicationAppversionLifecycle.prototype, "maxAgeInDays", {
        // max_age_in_days - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_age_in_days');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticBeanstalkApplicationAppversionLifecycle.prototype, "maxCount", {
        // max_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticBeanstalkApplicationAppversionLifecycle.prototype, "serviceRole", {
        // service_role - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service_role');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsElasticBeanstalkApplicationAppversionLifecycle;
}(cdktf.ComplexComputedList));
exports.DataAwsElasticBeanstalkApplicationAppversionLifecycle = DataAwsElasticBeanstalkApplicationAppversionLifecycle;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_application.html aws_elastic_beanstalk_application}
*/
var DataAwsElasticBeanstalkApplication = /** @class */ (function (_super) {
    __extends(DataAwsElasticBeanstalkApplication, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_application.html aws_elastic_beanstalk_application} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElasticBeanstalkApplicationConfig
    */
    function DataAwsElasticBeanstalkApplication(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_elastic_beanstalk_application',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        return _this;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // appversion_lifecycle - computed: true, optional: false, required: false
    DataAwsElasticBeanstalkApplication.prototype.appversionLifecycle = function (index) {
        return new DataAwsElasticBeanstalkApplicationAppversionLifecycle(this, 'appversion_lifecycle', index);
    };
    Object.defineProperty(DataAwsElasticBeanstalkApplication.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticBeanstalkApplication.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticBeanstalkApplication.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticBeanstalkApplication.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticBeanstalkApplication.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsElasticBeanstalkApplication.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsElasticBeanstalkApplication.tfResourceType = "aws_elastic_beanstalk_application";
    return DataAwsElasticBeanstalkApplication;
}(cdktf.TerraformDataSource));
exports.DataAwsElasticBeanstalkApplication = DataAwsElasticBeanstalkApplication;
